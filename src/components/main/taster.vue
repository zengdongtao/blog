<template>
 <el-container>
    <app-header></app-header>
    <div class="main">
      <el-main>
        <el-row class="Content">
          <div class="Content_page">
            <div class="main_box_right">
               <el-row >
                  <el-card class="box-card" >
                     <div class="iWantWrite" align="left">
                      <span class="main_right1">
                        <i class="el-icon-edit-outline"></i>peach技术专栏
                      </span>
                    </div>
                    <div class="taster_row">
                      <el-col :span="6">
                        <div class="taster_technology">1759</div>
                        <span>文章</span>
                      </el-col>
                      <el-col :span="6">
                        <div class="taster_technology">647w+</div>
                        <span>人气</span>
                      </el-col>
                      <el-col :span="6">
                        <div class="taster_technology">2420</div>
                        <span>评论</span>
                      </el-col>
                      <el-col :span="6">
                        <div class="taster_technology">727</div>
                        <span>粉丝</span>
                      </el-col>
                    </div>
                    
                  </el-card>
               </el-row>
               <el-row>
                  <h3 class="box_li" align="left">
                   <b align="left" class="hot_bax">热门作者</b>
                  </h3>
                  <el-card class="box-card" >
                     <div class="taster_auter">
                       <img :src="avatar" alt="">
                     </div>
                     <div class="taster_user">
                        <span>我是一只小青蛙</span>
                        <i class="el-icon-star-on" style="color:#fcce65;"></i>
                        <i class="el-icon-success" style="color:#5cc2f9;"></i>
                     </div>
                     <div class="taster_btn">
                       <el-button type="primary" icon="el-icon-plus">关注</el-button>
                       <el-button type="" icon="el-icon-message">私信</el-button>
                     </div>
                     <div class="taster_title">
                       <p>关注作者，不错过每一篇精彩</p>
                     </div>
                  </el-card>
               </el-row>
               <el-row>
                  <h3 class="box_li" align="left">
                   <b align="left" class="hot_bax">作者热门文章</b>
                  </h3>
                  <el-card class="box-card" align="left">
                    <div v-for="item in items" class="text item">
                      <i class="el-icon-view"></i>{{item.message}}
                    </div>
                  </el-card>
               </el-row>
            </div>
            <div class="main_content bg-purple">
              <div class="mian_blog"  >
                  <el-row class="main_tab">
                      <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">桃子</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">正文</a></el-breadcrumb-item>
                      </el-breadcrumb>
                      <h3 align="left">亿级日志平台实践<i class="el-icon-star-off"></i></h3>
                  </el-row>
                  <el-row style="float:left;margin-bottom:15px;">
                    <el-tag align="left">原创</el-tag>
                    <span class="taster_right_title" align="left">我是一只小青蛙</span>
                    <span class="taster_right_title" align="left">2018-05-18 20:00</span>
                    <span class="taster_right_title" align="left">阅读量：65</span>
                  </el-row>
                  <el-row>
                    <div class="artical_content_bak">
                      <p align="left" class="artical_content_p">
                        网页常见的布局有很多种,单列布局,多列布局.其中单列布局是国外很多网站比较常用的.咱们很多站长以及门户网站都使用的是是两列布局,很少用三列布局的.
                        下面我来分享下我们常用的网页布局格式以及设计技巧.
                      </p>
                      <br/>
                      <p align="left">
                        第一条  尽量使用单列而不是多列布局 
                      </p>
                      <p align="left">
                        单列布局能够让对全局有更好的掌控。同时用户也可以一目了然内容。而多列而已则会有分散用户注意力的风险使你的主旨无法很好表达。
                      </p>
                   
                      <p align="left">
                        第二条 合并重复的功能而使界面简洁
                      </p>
                      
                      <p align="left">
                        在整个网站开发期间我们会有意无意地创建很多模块，版面或者元素，而它们的功能可能有些是重叠的。此种情况表明界面已经过度设计了。时刻警惕这些冗余的功能模块，它无用且降低了电脑性能。此外，界面上模块越多，用户的学习成本就越大。所以请考虑重构你的界面使它足够精简。
                      </p>
                      <p align="left">
                        第三条 将不同区域的颜色区分出来
                      </p>
                      <p align="left">
                        颜色，层次及模块间的对比这些视觉上的设计可以很好地帮助用户浏览你的网站：他时刻知道当前所处的页面以及可以转到哪些页面。要传达这样一个好的界面，你就需要将可点击的元素（比如连接，按钮），可选择的元素（比如单选多选框）以及普通的文字明显区分开来。在下图的例子中，我将点击操作的元素设置为蓝色，选中的当前元素为黑色。这样适当的设计可以让用户很方面地在产品的各模块间切换。但千万不要把这三种元素设计得混乱不堪。
                      </p>
                      <p align="left">
                        第四条 界面要有鲜明对比,让人容易区分
                      </p>
                      <p align="left">
                        把主要功能区从界面中突出显示出来效果会好很多。使你的主要口号醒目有很多种方法。通过明暗色调的对比来突显。通过为元素添加阴影渐变等效果让界面富有层次感来张显主题。最后，你甚至可以在色相环上专门选择互补色（比如黄色与紫色）来设计你的界面，以达到突出重心的目的。综合所有这些，最后得到的界面会使你的主要意图与界面其他元素有明显的区分，得到完美的呈现。
                      </p>
                      <p align="left">
                        第五条 把界面做得环环相扣要好过直白的排版
                      </p>
                   
                      <p align="left">
                        一个平淡无奇行文无疑会让用户失去兴趣而继续阅读。是的，单列滚动的长页面是不错的，但是我们应该适当地设置一些小节，并且环环相扣，来提高用户的兴趣使其继续阅读。但需要注意的是节与节之间的留白不要太大。
                      </p>
                      <p align="left">
                        第六条 让界面平滑显示而不要死板地呈现
                      </p>
                      <p align="left">
                        用户进行操作过程中，界面上的元素会经常出现，隐藏，打开，关闭，放大缩小移位等。给这些元素增加些自然的动画，淡入淡出效果不但美观，也更符合实际，本来元素尺寸位置的变化就是一个需要时间的动画过程。但要注意动画时间不要设置过长，那样会让想尽快完成操作的用户不耐烦。
                      </p>
                    </div>
                  </el-row>
              </div>
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
import avatars from '@/assets/images/content3.jpg'
export default {
  name: 'Taster',
  components:{
    AppHeader
  },
  data() {
      return {
         avatar:avatars,
         items: [
            { message: '10000+文章汇总【附写作技巧】' },
            { message: '博客意见反馈处【2018版】' },
            { message: '博客订阅专栏--让学习变得简单' },
            { message: 'Redis漏洞利用与防御' },
            { message: '急中生智~利用Spark core完成"ETL"! ' }
          ],
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
  .main_box_right{
    float: left;
    min-width: 350px;
  }
  .mian_blog{
    padding:20px;
    margin:10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  }
  .main_tab{
    margin-top:15px;
  }
  .iWantWrite{
    margin-bottom:20px;
  }
  .taster_technology{
    border-right:1px solid #eee;
    margin:10px 0;
    font-size:12px;

  }
  .el-card__body .el-col-6{
    font-size:12px;
  }
  .taster_row{
    padding-bottom: 20px;
    height:50px;
  }
  .taster_auter img{
    width: 76px;
    height: 76px;
    border: 1px solid #eee;
    border-radius: 50%;
  }
  .taster_btn{
    margin:20px 0;
  }
  .item {
    margin-bottom: 18px;
  }
  .item i{
    margin-right:5px;
    color:#409eff;
  }
  .taster_right_title{
    margin:0 5px;
    color:#999999;
    font-size:14px;
  }
  .artical_content_bak{
    margin-top:50px;
  }
  .artical_content_p{
    background: #f6f6f6;
    padding:15px;
  }
</style>
