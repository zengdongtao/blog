<template>
 <el-container>
    <app-header></app-header>
    <div class="main" ref="box" @scroll="paperScroll()">
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark small_title">
              <span class="small_span1">博文统计：共【0】篇； 当你仅有的一把工具是锤子时，所有的东西看起来都像是钉子。</span>
              <span class="small_span2"><b type="primary">当前日期：</b>2018年04月27日 星期五 15:38:45</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="Content">
          <div class="Content_page">
            <div class="main_content bg-purple">
              <el-row>
                  <el-carousel :interval="3000" type="card" height="316px">
                    <el-carousel-item v-for="blogImg in carousel">
                      <img :src="blogImg.bannerIMG">
                    </el-carousel-item>
                  </el-carousel>
              </el-row>
              <div class="mian_blog" v-for="main in maindata">
                  
                  <div class="left_header" align="left">
                    <a class="header_avatar">
                      <img :src="avatar" alt="">
                    </a>
                    <a class="header_title">
                      <span class="header_title">{{main.headername}}</span>
                    </a>
                    <a class="header_time">
                     <span>{{main.headtime}}</span>
                    </a>
                  </div>
                  <router-link tag="h3" align="left" class="main_h3" to="/taster">
                      {{main.mainH3}}
                  </router-link>
                  <div align="left">
                    <a  href="" class="main_a">{{main.mainA}}</a>
                  </div>
                  <el-row class="main_tab">
                    <el-col :span="3" align="left">
                      <div class="main_tips_div">
                       <el-tag type="danger">{{main.article}}</el-tag>
                      </div>
                    </el-col>
                    <el-col :span="3" align="left">
                      <div class="main_tips_div">
                        <i class="el-icon-date"></i><span class="main_tips">{{main.datatime}}</span>
                      </div>
                    </el-col>
                     <el-col :span="3" align="left">
                      <div class="main_tips_div">
                        <i class="el-icon-view"></i><span class="main_tips">{{main.looksee}}</span>
                      </div>
                    </el-col>
                     <el-col :span="3" align="left">
                      <div class="main_tips_div">
                        <i class="el-icon-message"></i><span class="main_tips">{{main.comment}}</span>
                      </div>
                    </el-col>
                  </el-row>
              </div>
            </div>


            <div class="main_box_right">
               <el-row>
                  <div class="iWantWrite">
                    <span class="main_right1"><i class="el-icon-edit"></i>我要写文章</span>
                    <span class="main_own_1">记录自己技术轨迹</span>
                  </div>
               </el-row>
               <el-row>
                 <div class="main_box">
                   <h3 class="box_li" align="left">
                     <b align="left" class="hot_bax">热门推荐</b>
                     <a class="bax_fr header_time" align="right">更多</a>
                   </h3>
                   <el-card class="box-card" shadow="hover" align="left">
                    <div v-for="item in items" class="text item">
                      {{item.message}}
                    </div>
                  </el-card>
                 </div>
               </el-row>
               <el-row>
                 <div class="box_rigth_tag">
                  <h3 class="box_li" align="left">
                     <b align="left" class="hot_bax">热门标签</b>
                   </h3>
                   <el-card class="box-card" shadow="hover" align="left">
                    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
                  </el-card>
                 </div>
               </el-row>
               <el-row>
                 <div class="box_rigth_tag">
                  <h3 class="box_li" align="left">
                     <b align="left" class="hot_bax">粉丝榜 Top</b>
                   </h3>
                   <el-card class="box-card" shadow="hover" align="left">
                    <div class="text item" >
                      <ul class="fans_ul" >
                        <li v-for="(fans,index) in firends">
                          <span class="fans_number">{{index+1}}</span>
                          <div class="pic">
                            <div class="fans_headerimg">
                              <img :src="fans.fanIMG" alt="">
                            </div>
                          </div>
                          <a href="" class="fansname">{{fans.name}}</a>
                          <div class="followUsers_right">
                            <a class="number">{{fans.amount}}</a>
                            <span class="fans_concern" v-on:click="open(index)"><i class="el-icon-circle-plus" v-show="fans.isShow"></i></span>
                            <span class="fans_collect" @click="open1(index)"><i :class="fans.data?'el-icon-star-on':'el-icon-star-off'"></i></span>
                          </div>
                          <div class="clearfix"></div>
                        </li>
                      </ul>
                    </div>
                  </el-card>
                 </div>
               </el-row>
            </div>
            <div class="clearfix"></div>
          </div>
        </el-row>
      </el-main>
    </div>
    </el-container>
</template>

<script>
import AppHeader from '../Header.vue'
import avatar from '@/assets/images/content4.jpg'
import fans from '@/assets/images/content3.jpg'
import bannerIMG1 from '@/assets/images/blog_banner.jpg'
import bannerIMG2 from '@/assets/images/blog_banner4.jpg'
import bannerIMG3 from '@/assets/images/blog_banner5.jpg'
import bannerIMG4 from '@/assets/images/blog_banner6.jpg'
import bannerIMG5 from '@/assets/images/blog_banner7.jpg'
export default {
  name: 'Main',
  components:{
    AppHeader
  },
  data(){
    return {
      items: [
        { message: '10000+文章汇总【附写作技巧】' },
        { message: '博客意见反馈处【2018版】' },
        { message: '博客订阅专栏--让学习变得简单' },
        { message: 'Redis漏洞利用与防御' },
        { message: '急中生智~利用Spark core完成"ETL"! ' }
      ],
      tags:[
        { name: 'Javascript', type: '' },
        { name: 'Html', type: 'success' },
        { name: 'Css', type: 'info' },
        { name: 'Ajax', type: 'warning' },
        { name: 'Ios', type: 'danger' },
        { name: '互联网创业', type: '' },
        { name: '情感故事', type: 'warning' },
        { name: 'Android', type: 'warning' },
        { name: 'http协议', type: 'info' },
        { name: '服务器芯片', type: 'success' }
      ],
      maindata:[
        {
          headername:'老收藏家',
          headtime:'发布于19小时前',
          mainH3:'MySQL优化之explain的用法以及值的含义',
          mainA:' Where used 使用了WHERE从句来限制哪些行将与下一张表匹配或者是返回给用户。如果不想返回表中的全部行，并且连接类型ALL或index，这就会发生，或者是查询有问题不同连接类型的解释（按照效率高低的顺序排序）',
          article:'精选文章',
          datatime:'2018-4-20',
          looksee:'98次浏览',
          comment:'0条评论'
        },
        {
          headername:'资深专家',
          headtime:'发布于6小时前',
          mainH3:'SpringBoot开发案例从0到1构建分布式秒杀系统',
          mainA:' 前言最近，被推送了不少秒杀架构的文章，忙里偷闲自己也总结了一下互联网平台秒杀架构设计，当然也借鉴了不少同学的思路。俗话说，脱离案例讲架构都是耍流氓，最终使用SpringBoot模拟实现了部分秒杀场景，同时跟大家分享交流一下',
          article:'精选文章',
          datatime:'2018-5-12',
          looksee:'12次浏览',
          comment:'0条评论'
        },
        {
          headername:'羊羊羊',
          headtime:'发布于12小时前',
          mainH3:'记录一次勒索病毒漏洞扫描发现过程',
          mainA:'2017年5月，勒索病毒爆发，主要是通过windows主机相应的漏洞进行感染记录当时使用防火墙日志软件搜寻存在漏洞和疑似中毒的过程公网地址已经作废某单位业务系统漏洞分析报告中青在线5月13日电（中国青年报·中青在线记者潘圆）针对5月12日开始在全球爆发的',
          article:'精选文章',
          datatime:'2018-5-16',
          looksee:'1次浏览',
          comment:'0条评论'
        }
      ],
      carousel:[
        {bannerIMG:bannerIMG1},
        {bannerIMG:bannerIMG2},
        {bannerIMG:bannerIMG3},
        {bannerIMG:bannerIMG4},
        {bannerIMG:bannerIMG5}
      ],
      firends:[
        {name:'老男孩',amount:'1460',fanIMG:fans,isShow:true,data:false},
        {name:'老鼠爱大米',amount:'15',fanIMG:fans,isShow:true,data:false},
        {name:'你是我今生的最爱',amount:'50',fanIMG:fans,isShow:true,data:false},
        {name:'那个什么桃',amount:'12',fanIMG:fans,isShow:true,data:false}
      ],
      avatar:avatar,
      divindex:-1,
      scroll:''
      
    }
  },
  methods:{
    paperScroll(){
       // this.$nextTick(function () {
        //在vue中操作dom尽量用ref,  但它不是响应式的
        var srollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(srollTop>20){
          // console.log(this.$children);
          // this.$refs.el_header.css('background','rgba(0,0,0,0.5)');
        }
     // })
    },
    // 关注
    open(index) {
        this.$confirm('你要关注我吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '关注成功!'
          });
        this.firends[index].isShow =  !this.firends[index].isShow;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
    // 收藏
    open1(index) {
        this.firends[index].data =  !this.firends[index].data;
        if(this.firends[index].data){
          this.$message({message:'收藏成功！',type: 'success'});
        } 
        if(!this.firends[index].data){
          this.$message({message:'取消收藏！',type: 'warning'});
        }
         }
  },


  mounted: function () {
      window.addEventListener('scroll', this.paperScroll);
  },

}
   
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.box_rigth_tag .box-card{
  width: 350px;
}
.el-card__body span{
  margin:6px;
}
.box_tags_ul{
  padding-left:0;
}
.mian_blog{
  padding:20px;
  margin:10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
}
.mian_blog:hover{
  background: #fff;
}
  .Content_page{
    width: 1300px;
    margin:0 auto;
  } 
  .Content{
    padding-top:10px;
  }
  .main{
    width:100%;margin-top:60px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: none;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .small_title{
    padding:0 15px;
    min-height: 70px;
    line-height: 70px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  }
  .small_span1{
    float: left;
  }
  .small_span2{
    float: right;
  }
  .main_content {
    border-radius: 2px;
    background: none;
    float: left;
    max-width: 900px;
  }
  .main_tips_div{
    font-size: 12px;
    color:#190208;
    line-height: 29px;
  }
  .main_tips{
    margin-left:5px;
  }
  .main_a{
    font-size: 14px;
    text-decoration: none;
    color: #000;
  }
  .main_h3{
    color:#4285f4;
    cursor: pointer;
  }
  .text {
    font-size: 14px;
  }
  .iWantWrite{
    height: 48px;
    min-height: 48px;
    line-height: 48px;
    background: #fff;
    margin-top:10px;
    margin-bottom: 20px;
    border:1px solid #eee;
  }
  .main_tab{
    margin-top:15px;
  }
  .item {
    margin-bottom: 18px;
  }
  .hot_bax{
    padding-left:10px;
    border-left:3px solid #4285f4;
  }
  .bax_fr{
    float: right;
    line-height: 2;
    cursor: pointer;
  }
  .header_title,.header_time{
     margin-right:10px;
     font-size:13px;
     color:#999;
  }
  .main_right1{
    padding:0 10px;
    border-right:1px solid #eee;
    margin:0 10px;
    color:#4285f4;
  }
  .header_avatar img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .main_box_right{
    float: right;
    min-width: 350px;
  }
  .fans_ul{
    padding-left:0;
  }
  .fans_ul li{
    list-style: none;
    line-height: 48px;
    border-top: 1px dotted #ccc;
    padding:16px 0;
  }
  .pic{
    float: left;
    margin-left:16px;
    line-height: 48px;
  }
  .fansname{
    float: left;
    margin-left:16px;
    text-decoration: none;
    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .fans_headerimg{
    width: 48px;
    height: 48px;
  }
  .fans_headerimg img{
    width:100%;
    height: 100%;
    display: inline-block;
    border-radius:50%;
  }
  .fans_number{
    float: left;
    line-height: 36px;
  }
  .followUsers_right{
    float: right;
  }
  .fans_collect i{
    font-size:20px;
    color:red;
    cursor: pointer;
  }
  .fans_concern{
    font-size:20px;
    color:#ff7900;
  }
</style>
