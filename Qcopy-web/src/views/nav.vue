<template>
    <div class="NavBG">
        <header>
            <div class="LogoBG"> <img src="../assets/kodinger.jpg" alt="" class="logo"></div>
            <span>QuickCopy</span>
            <div class="EditBG">
                <div class="SearchBG">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="SearchKey" clearable></el-input>
                </div>
                <el-button type="primary" class="LoginBtn" @click="AddPreDialog=true">新增</el-button>
                <el-button type="primary" class="LoginBtn " @click="editStatus=!editStatus">编辑</el-button>
                <el-dropdown class='SelfInfo'>
                    <img src="../assets/kodinger.jpg">
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-show="false">
                            <p><i class="el-icon-user"></i>我的信息</p>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <p @click="LogOut"><i class="el-icon-switch-button"></i>退出登录</p>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </header>

        <waterfall :col='6' :data="sentList" v-loading="loading">
            <template>
                <el-card class="CardCon" v-for="sent in sentList" :key="sent.id"
                    v-show="sent.con.includes(SearchKey)||String(sent.id).includes(SearchKey)">
                    <p v-show="editStatus"><span class="editBtn" @click.prevent="delSent(sent)">删除</span><span
                            class="editBtn" @click.prevent="EditPrePS(sent)">编辑</span></p>
                    <div v-clipboard:copy="sent.con" v-clipboard:success="onCopy">{{sent.id}}.{{sent.con}}</div>
                </el-card>
            </template>
        </waterfall>



        <el-dialog title="新增" :visible.sync="AddPreDialog" width="500px" center>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="AddPreCon">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="AddPreDialog = false">取 消</el-button>
                <el-button type="primary" @click="AddPre">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog title="编辑" :visible.sync="EditPreDialog" width="500px" center>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="EditPreSent.con">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="EditPreDialog = false">取 消</el-button>
                <el-button type="primary" @click="EditPre">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                SearchKey: '',
                uid: '',
                AddPreDialog: false,
                AddPreCon: '',
                sentList: [],
                editStatus: false,
                EditPreDialog: false,
                EditPreSent: '',
                loading: true
            }
        },
        created() {
            if (this.$store.state.UserInfo.uid) {
                this.uid = this.$store.state.UserInfo.uid;
                this.Search()
            } else {
                this.LogOut()
            }
        },
        methods: {
            onCopy(e) {
                this.$message.success("信息复制成功", e);
            },
            onError(e) {
                this.$message.error("信息复制失败");
            },
            delSent(sent) {
                let self = this;

                this.$confirm('是否删除此条信息?', '提示', {
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    // type: 'warning'
                }).then(() => {
                    fetch('http://qc.kongdf.com:3000/sentcon/SentconDel', {
                        method: 'post',
                        body: JSON.stringify({
                            sentId: sent.id,
                            binduid: self.uid,
                        }),
                    }).then((res) => res.json()).then(response => {
                        if (response.StatusCode == '000000') {
                            self.$message.success('删除成功');

                            self.Search()
                        } else {
                            self.$message.error('删除失败');
                        }
                    })
                })
            },
            EditPrePS(sent) {
                this.EditPreSent = JSON.parse(JSON.stringify(sent))
                this.EditPreDialog = true
            },
            EditPre() {
                let self = this;
                fetch('http://qc.kongdf.com:3000/sentcon/SentconEdit', {
                    method: 'post',
                    body: JSON.stringify({
                        sentcon: self.EditPreSent.con,
                        sentId: self.EditPreSent.id,
                        binduid: self.uid,
                    }),
                }).then((res) => res.json()).then(response => {
                    if (response.StatusCode == '000000') {
                        self.$message.success('修改成功');
                        self.EditPreDialog = false;
                        self.EditPreSent = '';
                        self.Search()
                    } else {
                        self.$message.error('修改失败');
                    }
                })
            },
            Search() {
                let self = this

                fetch('http://qc.kongdf.com:3000/sentcon/SentconList', {
                    method: 'post',
                    body: JSON.stringify({
                        keyword: self.SearchKey,
                        binduid: self.uid,
                    }),
                }).then((res) => res.json()).then(response => {
                    if (response.StatusCode == '000000') {
                        // self.$message.success('搜索成功');
                        self.sentList = response.data
                    } else {
                        self.$message.error('搜索失败');
                    }
                    self.loading = false

                })
            },
            AddPre() {
                let self = this
                if (!self.AddPreCon) {
                    self.$message.error('请添加内容');
                    return
                }
                fetch('http://qc.kongdf.com:3000/sentcon/addSentcon', {
                    method: 'post',
                    body: JSON.stringify({
                        sentcon: self.AddPreCon,
                        binduid: self.uid,
                    }),
                }).then((res) => res.json()).then(response => {
                    if (response.StatusCode == '000000') {
                        self.$message.success('新增成功');
                        self.AddPreDialog = false
                        self.AddPreCon = ''
                        self.Search()
                    } else {
                        self.$message.error('新增失败');
                    }
                })
            },
            Login() {

            },
            LogOut() {
                this.$router.push({
                    name: 'login'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .NavBG {
        // padding: 20px 30px;
        width: 100%;
        height: 100%;

        .editBtn {
            // float: right;
            font-size: 14px;
            color: #44a0b3;
            cursor: pointer;
            margin-left: 10px;
        }

        header {
            height: 80px;
            line-height: 80px;
            background: #fff;
            border-bottom: 1px dashed #44a0b3;
            padding: 0 20px;

            .LogoBG {

                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #fff;
                overflow: hidden;
                box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
                text-align: center;
                vertical-align: middle;
                margin-left: 50px;

                .logo {
                    width: 50px;
                    height: 50px;
                    padding-top: 3px;
                }

                span {
                    color: #44a0b3;
                    margin-left: 20px;
                    // padding-left: 20px;

                }

            }

            .EditBG {
                float: right;

                // margin-right: 50px;
                .SearchBG {
                    display: inline-block;
                    width: 240px;
                }

                .SelfInfo {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    // margin-top: 20px;
                    float: right;
                    margin-top: 15px;
                    // margin-right: 50px;
                    margin-left: 40px;

                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 1px dashed #44a0b3;
                    }
                }

                .LoginBtn {
                    margin-left: 10px;
                }

            }


        }


        .CardCon {
            width: 100%;
            max-height: 300px;
            overflow-y: scroll;
        }
    }
</style>