<template>
 <el-container>
    <app-header></app-header>
    <div class="main">
      <el-main>
        <el-row class="Content">
          <div class="Content_page">
             <div class="resume_left">
             	<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="HOME" name="first"  class="tab_resume">
						<div class="resume_bg">
							<img :src="resumeHeadre" alt="">
						</div>
						<div class="resume_title">
							<div class="promo-block-divider">
								<h1 align="left">
									Alex 
									<br>
									Teseira
								</h1>
								<p class="promo-block-text" align="left">
									Web Designer & Front-end Developer
								</p>
								<p class="promo-block-p">
									This is a selection of my web design and development work. I've been involve in many different types of project.
								</p>
							</div>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="ABOUT" name="second">
				    	<el-row class="about-content">
				    		<el-col :span="12">
								<div class="grid-content bg-purple">
									<img :src="home" alt="">
								</div>
							</el-col>
	  						<el-col :span="12">
	  							<div class="about-content-right">
	  								<h1>介绍|我的全部</h1>
	  								<p>
	  									1'm亚历Teseira，欧伦非常胡萝卜，增强回扣，但他们occaecat时间和活力，如劳动力和肥胖。多年来，我会来的，谁将会nostrud aliquip了她锻炼的优势，使刺激措施，如果学区和长寿。
										<br>
										想成为在cupidatat cillum疼痛已经在DUIS等dolore麦格纳被批评逃离产生任何结果的乐趣。Excepteur cupidatat黑人就不是excepteur，舒缓心灵，那就是，他们抛弃了那些谁是责怪你的烦恼的一般责任。
									</p>
									<div>
										<h3 align="left">HTML</h3>
										<el-progress type="circle" :percentage="50" color="#ff4949"></el-progress>
										<h3 align="left">JAVASCRIPT</h3>
										<el-progress type="circle" :percentage="90" color="#13ce66"></el-progress>
										<h3 align="left">CSS</h3>
										<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
									</div>
	  							</div>
	  						</el-col>
				    	</el-row>
						
				    </el-tab-pane>
				    <el-tab-pane label="ENTRIES" name="third">角色管理</el-tab-pane>
				    <el-tab-pane label="WORKS" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
             </div>
             <div class="resume_right"></div>
          </div>
        </el-row>
      </el-main>
    </div>
    </el-container>
</template>

<script>
import AppHeader from '../Header.vue'
import resumeHeadre from '@/assets/images/remuse.jpg'
import home from '@/assets/images/home.jpg'
export default {
  name: 'Resume',
  components:{
    AppHeader
  },
  data() {
	  	return {
	       activeName: 'first',
	       resumeHeadre:resumeHeadre,
	       home:home
	  	}
  },
  methods:{
  	handleClick(tab, event) {
        console.log(tab, event);
      }
  } 
   
}
</script>

<style scoped>	
 .main{
    width:100%;margin-top:60px;
    background: rgba(255,255,255,0.7);
  }
  .main_content {
    border-radius: 2px;
    background: none;
    float: left;
    max-width: 900px;
    margin-left:50px;
  }
  .Content_page{
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
  #tab-first{
  	border:1px solid #000;
  	border-radius: 4px;
  }
  .resume_bg{
  	position: relative;
  }
  .resume_title{
  	position: absolute;
    top: 21%;
    left: 14%;
  }
  .promo-block-divider{
  	border-bottom: 1px solid rgba(255,255,255,.4);
  }
  .promo-block-divider h1{
  	font-size:70px;
  	color: #fff;
    line-height: 1.5;
  }
  .promo-block-text{
  	font-size: 25px;
    color: #fff;
  }
  .promo-block-p{
  	color: #fff;
  }
  .tab_resume{
	margin:20px 0;
  }
  .about-content{
  	width:1300px;
  	margin: 0 auto;
  }
  .about-content-right{
  	background: #fff;
  }
  .about-content-right {
  	padding:50px;
  }
  .about-content-right p{
  	font-size:18px;
  	line-height: 1.5;
  	text-align: left;
  	margin-bottom: 60px;
  }
  .about-content-right h1{
  	margin-top:0;
  	text-align: left;
  }
  .el-progress{
  	margin:0 15px;
  }
</style>
