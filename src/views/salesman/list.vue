<style lang="less" scoped>
@import "../../config/index.less";
.box {
  width: 100%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 30px 20px;
  padding-bottom: 0;
  background: #fff;
}
.ivu-radio-wrapper {
  margin-right: 30px;
}
</style>

<template>
  <div id="Main">
    <!-- <h2 class="Title">业代推广活动设置</h2> -->
    <div class="box">
      <Form ref="form" :model="formData" :label-width="90" :rules="rule">
        <Row>
          <Col span="12">
            <Form-item label="时间" required>
              <Row>
                <Col span="11">
                  <Form-item>
                    <data-range hour="00:00" v-model="formData.queryStartTime"></data-range>
                  </Form-item>
                </Col>
                <Col span="2" style="text-align: center;">至</Col>
                <Col span="11">
                  <Form-item>
                    <data-range hour="24:00" placeholder="结束时间" v-model="formData.queryEndTime"></data-range>
                  </Form-item>
                </Col>
              </Row>
            </Form-item>
            <Form-item label="区域" prop="searchAreaCode">
              <Cascader :data="areaData" v-model="formData.searchAreaCode" change-on-select></Cascader>
            </Form-item>
          </Col>
          <Col span="8" offset="1">
            <Form-item label="品牌名称" prop="brandId">
              <Select v-model="formData.brandId" placeholder="请选择">
                <Option
                  :value="item.id"
                  v-for="(item,index) in brandList"
                  :key="index"
                >{{ item.brandName }}</Option>
              </Select>
            </Form-item>
            <Form-item label="状态" props="showStatus">
              <Radio-group v-model="formData.showStatus" style="width: 100%;">
                <Radio label="1">进行中</Radio>
                <Radio label="2">暂停</Radio>
                <Radio label="4">结束</Radio>
              </Radio-group>
            </Form-item>
          </Col>
          <Col span="2" offset="1" style="margin-top:24px">
            <Button @click="submit('form')" type="primary" class="btn-search">查询</Button>
          </Col>
        </Row>
      </Form>
    </div>
    <div class="box" style="margin-top: 15px;padding-bottom:20px">
      <div class="contentTop">
        <Button @click="add" class="btn-right" type="primary">新增</Button>
      </div>
      <Table :columns="columns1" :data="pageData" disabled-hover></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="pageNum" :current="page" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import area from "@/config/china_code_data.js";
import dataRange from "@/components/data-range/data-range.vue";
import { EDFAULT_STARTTIME, EDFAULT_ENDTIME } from "@/util/index.js"; //搜索条件默认时间
import { dispalyShowStatus } from "@/util/ENUMS.js";
export default {
  name: "salesman-list-keepAlive",
  data() {
    return {
      formData: {
        queryStartTime: EDFAULT_STARTTIME,
        queryEndTime: EDFAULT_ENDTIME,
        searchAreaCode: [],
        goodsType: "",
        brandId: "",
        remitArrow: ""
      },
      page: 1,
      pageNum: 0,
      rule: {},
      columns1: [
        {
          title: "品牌名称",
          key: "brandName",
          align: "center"
        },
        {
          title: "创建时间",
          key: "createTime",
          align: "center",
          render: (h, params) => {
            return h("div", this.Global.formatYear(params.row.createTime));
          }
        },
        {
          title: "陈列主题",
          key: "name",
          align: "center"
        },
        {
          title: "开始时间",
          key: "startTime",
          align: "center",
          render: (h, params) => {
            return h("div", this.Global.createTime(params.row.startTime));
          }
        },
        {
          title: "结束时间",
          key: "endTime",
          align: "center",
          render: (h, params) => {
            return h("div", this.Global.createTime(params.row.endTime));
          }
        },
        {
          title: "状态",
          key: "showStatus",
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              this.Global.ENUMS.activityType[params.row.showStatus]
            );
          }
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 200,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      let pramasData = {
                        brandId: params.row.brandId,
                        vendorName: params.row.vendorName,
                        id: params.row.id,
                        brandName: params.row.brandName,
                        lastStep: "Y"
                      };
                      this.$router.push({
                        path: "/salesmanNext",
                        query: pramasData
                      });
                    }
                  }
                },
                "关联业代"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.$router.push(
                        "/salesmanEdd?type=edd&id=" + params.row.id
                      );
                    }
                  }
                },
                "修改"
              )
            ]);
          }
        }
      ],
      pageData: [],
      areaData: area,
      brandList: []
    };
  },
  components: {
    dataRange
  },
  created() {
    this.Global.doPostNoLoading("condition/queryBrands.json", {}, res => {
      this.brandList = [];
      Object.entries(res).forEach(item => {
        this.brandList.push({ id: Number(item[0]), brandName: item[1] });
      });
      if (this.brandList && this.brandList.length) {
        this.formData.brandId = this.brandList[0].id;
        this.init();
      }
    });
  },
  methods: {
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.page = 1;
          this.init(this.page, 10);
        } else {
          this.$Message.error("请选择查询条件!!");
        }
      });
    },
    changePage(size) {
      this.init(size, 10);
    },
    init(currentPage, pageSize) {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);
      data["currentPage"] = currentPage;
      data["pageSize"] = pageSize;
      data["isPromote"] = 1;
      this.Global.doPost("activity/queryActivityList.json", data, res => {
        this.pageNum = res.items;
        this.page = res.page;
        this.pageData = res.datalist;
      });
    },
    goodsType(data) {
      return dispalyShowStatus[data];
    },
    add() {
      this.$router.push("/salesmanEdd?type=add");
    }
  }
};
</script>