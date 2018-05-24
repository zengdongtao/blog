<template>
 <el-container>
    <app-header></app-header>
    <div class="main">
      <el-main>
        <el-row class="Content">
          <div class="Content_page">
              <el-row>
                <div class="tab_btn">
                 <!--  <el-button type="info">专家博主</el-button>
                  <el-button type="warning">博客之星</el-button>
                  <el-button type="danger">推荐博主</el-button> -->
                   <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="专家博主" name="first" type="info">
                          <el-row>
                           <ul class="profess_list_ul">
                             <li class="profess_list" v-for="item in profess">
                               <div class="professer_header">
                                 <img :src="item.profess1" alt="" class="images">
                               </div>
                              <div class="profess_name">
                                <a href="">{{item.professer}}</a><span>{{item.professName}}</span>
                              </div>
                              <div class="profess_social">
                                <span class="concern">关注 <b>{{item.professConcren}}</b></span>
                                <span class="fans">粉丝 <b>{{item.professFans}}</b></span>
                                <span class="artical">文章 <b>{{item.professerArtical}}</b></span>
                              </div>
                              <div class="profess_content">
                                <p>
                                  {{item.professContent}}
                                </p>
                              </div>
                              <div class="profess_concren">
                                <el-button type="primary" icon="el-icon-plus">关注</el-button>
                              </div>
                              <div class="profess_reset">
                                <p align="left">最新更新</p>
                                <p class="profess_reset_p">{{item.professReset}}</p>
                              </div>
                             </li>
                             <div class="clearfix"></div>
                           </ul>
                        </el-row>
                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </div>
              </el-row>
              
          </div>
        </el-row>
      </el-main>
    </div>
    </el-container>
</template>

<script>
import AppHeader from '../Header.vue'
import professman from '@/assets/images/content3.jpg'
export default {
  name: 'Taster',
  components:{
    AppHeader
  },
  data() {
      return {
         profess:[
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          },
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          },
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          },
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          },
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          },
          { profess1:professman,
            professer:'软件开发专家',
            professName:'桃子',
            professConcren:'1',
            professFans:'125',
            professerArtical:'120',
            professContent:'大数据开源系列软件EasyHadoop作者，目前供职于暴风影音数据部门，负责暴风整',
            professReset:'OpenTSDB 2.3+及TCollector 1.3+安装配置排错'
          }
         ],
         activeName:'first'
      }
  },
methods:{
    handleClick(tab,event){
      console.log(tab,event); 
    }
  }
   
}
</script>

<style scoped>
 .main{
    width:100%;margin-top:60px;
  }
  .main_content {
    border-radius: 2px;
    background: none;
    float: left;
    max-width: 900px;
    margin-left:50px;
  }
  .Content_page{
    width: 1300px;
    margin:0 auto;
  }
  .Content{
    padding-top:10px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .images{
    width:100%;
    height:100%;
    border-radius: 50%;
  }
  .professer_header{
    display: inline-block;
    width:80px;
    height: 80px;
  }
  .profess_list_ul{
    padding-left:0;
  }
  .profess_list{
    border: 1px solid #f2f2f2;
    float: left;
    padding:30px;
    margin-left:30px;
    margin-bottom: 40px;
    width: 332px;
    height: 328px;
    list-style: none;
    background: #fff;
    border-radius: 6px;
    transition:box-shadow 1s;

  }
  .profess_list:hover{
    box-shadow: 0 2px 10px rgba(0,0,0,.1);
  }
  .profess_name{
    margin:15px 0;
    font-size:18px;
  }
  .profess_name a{
    text-decoration: none;
    padding:0 15px;
  }
  .profess_social span{
    font-size:12px;
    margin:0 10px;
    color:#7f6666;
  }
  .profess_reset >p{
    margin:0;
  }
  .profess_content p{
    font-size:14px;
    line-height: 1.5;
  }
  .profess_reset .profess_reset_p{
    font-size:12px;
    margin-top:10px;
  }
  .tab_btn{
    margin:50px 0;
  }
</style>
