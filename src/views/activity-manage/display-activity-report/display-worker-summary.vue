<style lang="less" scoped>
@import "../../../config/index.less";
.box {
  width: 100%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 30px 20px;
  padding-bottom: 0;
  background: #fff;
}
.ivu-table-row {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(0px);
}
//搜索条件 时间控件
.ivu-date-picker {
  display: block;
}
//搜索条件 radio按钮
.ivu-radio-wrapper {
  margin-right: 30px;
}
.searchBox {
  overflow: hidden;
  .search_btn {
    float: left;
    width: 50px;
    padding: 5px 14px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .search_icon {
    float: left;
    padding: 5px 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>

<template>
  <div id="Main">
    <!-- <h2 class="Title">陈列业代关联汇总</h2> -->
    <div class="box">
      <Form ref="form" :model="formData" :label-width="88" :rules="rule">
        <Row>
          <Col span="21">
            <Row>
              <Col span="14">
                <Form-item label="上传时间:" required>
                  <Row>
                    <Col span="11">
                      <Form-item>
                        <data-range hour="00:00" v-model="formData.queryStartTime" start></data-range>
                      </Form-item>
                    </Col>
                    <Col span="2" style="text-align: center;">至</Col>
                    <Col span="11">
                      <Form-item>
                        <data-range placeholder="结束时间" hour="24:00" v-model="formData.queryEndTime"></data-range>
                      </Form-item>
                    </Col>
                  </Row>
                </Form-item>
              </Col>
              <Col span="10">
                <Form-item label="品牌名称:" required>
                  <Select v-model="formData.brandId" placeholder="请选择品牌" @on-change="changeValue">
                    <Option
                      :value="item.id"
                      v-for="(item,index) in brandList"
                      :key="index"
                    >{{ item.brandName }}</Option>
                  </Select>
                </Form-item>
              </Col>
            </Row>
            <Row>
              <Col span="8">
                <Form-item label="活动包名:" prop="groupId" required>
                  <Select
                    v-model="formData.groupId"
                    placeholder="请选择活动包名"
                    @on-change="getActivityList"
                    clearable
                  >
                    <Option
                      :value="item.id"
                      v-for="(item,index) in groupList"
                      :key="index"
                    >{{ item.groupName }}</Option>
                  </Select>
                </Form-item>
              </Col>
              <Col span="8">
                <Form-item label="陈列活动:" prop="brandId">
                  <Select v-model="formData.activityId" placeholder="请选择活动" clearable>
                    <Option
                      :value="item.id"
                      v-for="(item,index) in activityList"
                      :key="index"
                    >{{ item.name }}</Option>
                  </Select>
                </Form-item>
              </Col>
              <Col span="8">
                <Form-item label="业代姓名:">
                  <Input v-model="formData.workerName" placeholder="请输入业代姓名"></Input>
                </Form-item>
              </Col>
            </Row>
          </Col>
          <Col span="2" offset="1" style="margin-top:10px">
            <div class="searchBox">
              <Button @click="submit('form')" class="btn-search search_btn" type="primary">查询</Button>
              <Button
                @click="showQuery=!showQuery"
                class="search_icon"
                type="primary"
                icon="ios-arrow-up"
                v-if="showQuery"
              ></Button>
              <Button
                @click="showQuery=!showQuery"
                class="search_icon"
                type="primary"
                icon="ios-arrow-down"
                v-else
              ></Button>
            </div>
          </Col>
        </Row>
        <transition name="fade">
          <Row v-if="showQuery">
            <Col span="7">
              <Form-item label="业代手机号:">
                <Input v-model="formData.workerPhone" placeholder="请输入业代手机号"></Input>
              </Form-item>
            </Col>
          </Row>
        </transition>
      </Form>
    </div>
    <div class="box" style="margin-top: 15px;padding-bottom:20px">
      <div class="contentTop">
        <Button @click="exportExcel" class="btn-right" icon="ios-download-outline" type="primary">导出</Button>
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
import dataRange from "@/components/data-range/data-range.vue";
import { EDFAULT_STARTTIME, EDFAULT_ENDTIME } from "@/util/index.js"; //搜索条件默认时间
import { workerStoreDisplayStatistics } from "@/api/activity-manage/display-activity-manage.js";
import { validateStart, validateEnd } from "@/util/index.js"; //验证规则

export default {
  name: "display-worker-summary-keepAlive",
  data() {
    return {
      showQuery: false,
      formData: {
        queryStartTime: EDFAULT_STARTTIME,
        queryEndTime: EDFAULT_ENDTIME,
        brandId: "",
        groupId: "",
        activityId: "",
        workerName: "",
        workerPhone: ""
      },
      page: 1,
      pageNum: 0,
      rule: {
        queryStartTime: [{ validator: validateStart }],
        queryEndTime: [{ validator: validateEnd }]
      },

      columns1: [
        {
          title: "序号",
          type: "index",
          width: 70,
          align: "center"
        },
        {
          title: "品牌名称",
          key: "brandName",
          align: "center"
        },
        {
          title: "业代姓名",
          key: "workerName",
          align: "center"
        },
        {
          title: "手机号码",
          key: "workerPhone",
          align: "center"
        },
        {
          title: "活动名称",
          key: "activityName",
          align: "center"
        },

        {
          title: "门店数",
          key: "storeCount",
          align: "center"
        },
        {
          title: "参与总量",
          key: "uploadCount",
          align: "center"
        },
        {
          title: "通过数",
          key: "uploadAuditCount",
          align: "center"
        },
        {
          title: "不通过数",
          key: "uploadNotPassCount",
          align: "center"
        },
        {
          title: "待审核数",
          key: "uploadPendingCount",
          align: "center"
        }
      ],
      pageData: [],
      brandList: [],
      groupList: [],
      activityList: []
    };
  },
  components: { dataRange },
  created() {
    this.Global.doPostNoLoading(
      "condition/queryBrands.json",
      { date: 7, activityType: 3, scope: "a" },
      res => {
        this.brandList = [];
        Object.entries(res).forEach(item => {
          this.brandList.push({ id: Number(item[0]), brandName: item[1] });
        });
        if (this.brandList && this.brandList.length) {
          this.formData.brandId = this.brandList[0].id;
          this.changeValue(this.formData.brandId);
        }
      }
    );
  },
  methods: {
    submit: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.page = 1;
          this.init(this.page, 10);
        }
      });
    },

    getActivityList(value) {
      this.activityList = [];
      this.formData.activityId = "";
      if (!value) return;
      this.Global.doPostNoLoading(
        "condition/queryActivity.json",
        { date: 7, activityType: 3, scope: "a", groupId: value },
        res => {
          Object.entries(res).forEach(item => {
            this.activityList.push({ id: Number(item[0]), name: item[1] });
          });
        }
      );
    },
    changePage: function(size) {
      this.init(size, 10);
    },
    init(currentPage, pageSize) {
      if (!this.formData.brandId || !this.formData.groupId) {
        this.$Message.error("请选择查询条件！");
        return;
      }
      var data = this.Global.JsonChange(this.formData);

      data["queryStartTime"] = this.Global.createTime(
        this.formData.queryStartTime
      );

      data["queryEndTime"] = this.Global.createTime(this.formData.queryEndTime);

      this.Global.deleteEmptyProperty(data);
      data["currentPage"] = currentPage;
      data["pageSize"] = pageSize;
      workerStoreDisplayStatistics(data).then(res => {
        if (res.status == 1) {
          this.pageNum = res.data.items;
          this.pageData = res.data.datalist;
          this.page = res.data.page;
        }
      });
    },
    exportExcel() {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);

      data["queryStartTime"] = this.Global.createTime(
        this.formData.queryStartTime
      );

      data["queryEndTime"] = this.Global.createTime(this.formData.queryEndTime);

      var url = this.Global.getExportUrl(
        "report/workerStoreDisplayStatisticsExport.json",
        data
      );
      window.open(url);
    },
    changeValue(value) {
      this.groupList = [];
      this.formData.groupId = "";
      if (!value) return;
      this.Global.doPostNoLoading(
        "condition/queryGroup.json",
        { date: 7, activityType: 3, scope: "a", brandId: value },
        res => {
          Object.entries(res).forEach(item => {
            this.groupList.push({ id: Number(item[0]), groupName: item[1] });
          });
          if (this.groupList && this.groupList.length) {
            this.formData.groupId = this.groupList[0].id;
            this.getActivityList(this.formData.groupId);
          }
        }
      );
    }
  }
};
</script>