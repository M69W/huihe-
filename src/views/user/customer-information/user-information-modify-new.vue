<style lang="less" scoped>
@import "../../../config/index.less";

.box {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;
  background: #fff;
}
.ivu-table-row {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(0px);
}

.ivu-form-item-content {
  width: 400px;
}
</style>

<template>
  <div id="Main">
    <!-- <h2 class="Title">客户信息</h2> -->

    <div class="main-container">
      <div class="box">
        <Form ref="form" :model="formData" :label-width="88" :rules="rule">
          <Row>
            <Col span="7">
              <Form-item label="门店ID:" prop="storeId">
                <Input clearable v-model.trim="formData.storeId" placeholder="请输入门店ID"></Input>
              </Form-item>
            </Col>
            <Col span="7">
              <Form-item label="门店编号:" prop="realName">
                <Input clearable v-model.trim="formData.joinCode" placeholder="请输入门店编号"></Input>
              </Form-item>
            </Col>
            <Col span="7">
              <Form-item label="手机号:" prop="nickName">
                <Input clearable v-model.trim="formData.phone" placeholder="请输入手机号"></Input>
              </Form-item>
            </Col>

            <Col span="2" offset="1" style="margin-top: 0px;">
              <div class="searchBox">
                <Button @click="submit('form')" class="btn-search search_btn" type="primary">查询</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div class="box" style="margin-top: 15px;padding:10px">
        <Table :columns="columns1" :data="pageData" disabled-hover></Table>
      </div>
      <div style="margin: 10px;overflow: hidden" class="page-box">
        <div style="float: right;">
          <Page :total="pageNum" :current="page" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    <Modal v-model="memoStatus" title="备注" @on-ok="ok" loading>
      <Input placeholder="请输入备注信息" v-model="memo" autofocus></Input>
    </Modal>
    <Modal v-model="showMore">
      <h3 slot="header" style="text-align:center;">修改</h3>
      <Form :label-width="85">
        <Form-item label="门店名称:" prop="storeName">
          <Input placeholder="请输入门店名称" v-model="addData.storeName"></Input>
        </Form-item>
        <Form-item label="姓名:" prop="name">
          <Input placeholder="请输入姓名" v-model="addData.name"></Input>
        </Form-item>
        <Form-item label="手机号:" prop="phone">
          <Input placeholder="请输入手机号" v-model="addData.phone"></Input>
        </Form-item>
      </Form>
      <div slot="footer" style="text-align:center">
        <i-button type="error" @click="showMore = false">取消</i-button>
        <i-button type="success" @click="sureChange">确定</i-button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "user-information-modify-keepAlive",

  data() {
    return {
      formData: {
        goodsType: "",
        activityName: "",
        userId: "",
        isBlack: "",
        phone: ""
      },
      showMore: false,
      addData: {},
      page: 1,
      pageNum: 0,
      pageSize: 10,
      memoStatus: false,
      selectUserId: "",
      selectBrandId: "",
      rule: {
        brandId: [{ required: true, message: "请选择品牌名称" }]
      },
      columns1: [
        {
          title: "用户ID",
          key: "storeId",
          align: "center",
          minWidth: 140,
          tooltip: true
        },
        {
          title: "品牌名称",
          key: "brandName",
          align: "center",
          tooltip: true,
          minWidth: 140
        },
        {
          title: "店铺名称",
          key: "storeName",
          align: "center",
          tooltip: true,
          minWidth: 140
        },
        {
          title: "客户编号",
          key: "joinCode",
          align: "center",
          tooltip: true,
          minWidth: 140
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          minWidth: 100,
          tooltip: true
        },
        {
          title: "昵称",
          key: "wxNickName",
          align: "center",
          minWidth: 100,
          tooltip: true
        },
        {
          title: "手机号码",
          key: "phone",
          align: "center",
          minWidth: 140,
          tooltip: true
        },
        {
          title: "区域",
          key: "areaName",
          align: "center",
          minWidth: 140,
          tooltip: true
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          minWidth: 140,
          tooltip: true
        },
        {
          title: "状态",
          key: "status",
          minWidth: 80,
          align: "center",
          render: (h, params) => {
            return h("div", this.blackType(params.row.status));
          }
        },
        {
          title: "客户类型",
          key: "storeType",
          minWidth: 110,
          align: "center",
          render: (h, params) => {
            let str = "";
            if (params.row.storeType == 0) {
              str = "门店";
            } else {
              str = "内部员工";
            }
            if (params.row.storeType != 0) {
              let tag = [
                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.$Modal.confirm({
                          title: "警告",
                          content: "是否确定解绑内部员工",
                          onOk: () => {
                            let data = {
                              id: params.row.storeType
                            };
                            this.Global.doPost(
                              "brandStaff/deleteBrandStaff.json",
                              data,
                              res => {
                                this.$Message.success("解绑成功");
                                this.init();
                              }
                            );
                          }
                        });
                      }
                    }
                  },
                  str
                )
              ];
              return h("div", tag);
            } else {
              return h("div", str);
            }
          }
        },
        {
          title: "备注",
          key: "memo",
          align: "center",
          minWidth: 80,
          render: (h, params) => {
            return h("div", params.row.memo ? params.row.memo : "无");
          }
        },
        {
          title: "操作",
          key: "action",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            let tag = [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.addData = {
                        storeId: params.row.storeId,
                        storeName: params.row.storeName,
                        name: params.row.name,
                        phone: params.row.phone,
                        address: params.row.address,
                        areaName: params.row.areaName,
                        joinCode: params.row.joinCode,
                        locate: params.row.locate
                      };
                      this.showMore = true;
                    }
                  }
                },
                "修改"
              )
            ];
            if (params.row.isDiscontinued == 0) {
              tag.push(
                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.$Modal.confirm({
                          title: "警告",
                          content: "启用停售客户必须重新导入上报信息",
                          onOk: () => {
                            this.Global.doPost(
                              "tool/doActivateStopStore.json",
                              {
                                joinCode: params.row.joinCode,
                                brandId: params.row.brandId
                              },
                              res => {
                                this.$Message.success("操作成功");
                                this.init();
                              }
                            );
                          }
                        });
                      }
                    }
                  },
                  "启用停售客户"
                )
              );
            }
            return h("div", tag);
          }
        }
      ],
      pageData: [],
      memo: "",
      userInforEdit: false,
      brandList: [],
      showQuery: false
    };
  },
  watch: {
    showMore(val) {
      if (!val) {
        this.addData = {};
      }
    }
  },
  created() {
    let path = this.$route.path;
  },
  methods: {
    goToLog() {
      this.$router.push({
        path: "/stopLog"
      });
    },
    sureChange() {
      if (!this.addData.name) {
        this.$Message.info("姓名不能为空");
        return false;
      }
      if (!this.addData.address) {
        this.$Message.info("地址不能为空");
        return false;
      }
      if (this.addData.phone) {
        if (!this.Global.checkPhone(this.addData.phone)) {
          this.$Message.info("请输入正确的手机号");
          return false;
        }
      }
      let { phone, storeId, storeName, name, address } = this.addData;
      let data = {
        phone,
        storeId,
        storeName,
        name,
        address,
        memo: "openPhone"
      };
      // this.Global.deleteEmptyProperty(data);
      data["isOnePhone"] = 0;
      // this.getBrandIds()

      this.Global.doPost("store/doSettingStore.json", data, res => {
        this.$Message.success("修改成功");
        this.showMore = false;
        this.init();
      });
    },
    getBrandIds() {
      let userData = window.sessionStorage.getItem("user");
      let brandIds = "";
      if (userData) {
        brandIds = Object.keys(JSON.parse(userData).brands).join();
      }
      return brandIds;
    },
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.page = 1;
          this.init();
        } else {
          this.$Message.error("请选择查询条件!!");
        }
      });
    },
    changePage: function(size) {
      this.page = size;
      this.init();
    },
    createTime: function(val) {
      var time = this.Global.createTime(val);
      return time;
    },
    init() {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);
      data["currentPage"] = this.page;
      data["pageSize"] = this.pageSize;
      data["brandIds"] = this.getBrandIds();
      data["isOnePhone"] = 0;
      this.Global.doPost("store/querySettingStoreData.json", data, res => {
        this.pageNum = res.items;
        this.pageData = res.datalist;
        // this.page = res.page;
      });
    },
    blackType(data) {
      return this.Global.ENUMS.blackType[data];
    },
    ok() {
      this.getUserMemo(this.selectUserId, this.selectBrandId);
    },
    getUserMemo(userId, brandId) {
      this.Global.doPost(
        "report/brandUserAddMemo.json",
        {
          userId: userId,
          brandId: brandId,
          memo: this.memo,
          userType: "B"
        },
        () => {
          this.memoStatus = !this.memoStatus;
          this.init();
        }
      );
    },
    exportExcel() {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);
      data["userType"] = "B";
      var url = this.Global.getExportUrl(
        "report/userInfoDetailExport.json",
        data
      );
      window.open(url);
    }
  }
};
</script>