 <template>
<GlobalNavbar/>
<token></token>
<section>
<video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg" playsinline autoplay muted loop>
<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm">
<source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4">
</video>
    <div class="contrast-[80%] w-full h-96 bg-fixed bg-center bg-cover bg-center flex justify-center items-center pt-[30%] pb-[25%]" >
      <div class="h-screen w-screen flex flex-col justify-center">
        <div class="flex flex-row justify-around -mt-12 h-96">
          <div class="h-2/3 w-1/3 text-left ">
            <p class="font-extrabold text-left text-2xl mb-1 text-white">— NOW PRESENTING</p>
            <h1 class="font-extrabold text-8xl text-white mb-4 text-center">Lowballd</h1>
            <h2 class="font-extrabold  text-white text-center text-2xl">
              An innovative fashion marketplace. A brand new social media.
            </h2>    
          </div>
        <div class="w-1/2 h-full"></div>
      </div>
    </div>
  </div>
</section>
<section> 
  <div class=" py-16 mx-auto px-8">
    <div class="grid grid-cols-2 h-screen">
      <div class="relative z-10 py-16">
        <div class="relative h-full  ease-in duration-[180ms]" v-motion-slide-visible-once-left>
          <iframe
          id="ytplayer"
          class="absolute inset-0  pt-[10%] pb-[10%] w-full h-full"
            src="https://www.youtube.com/embed/dTe0S2nzB3I"
            alt="Indoors house">
          </iframe> 
        </div>
      </div>
      <div class="relative flex items-center ease-in duration-[150ms]" v-motion-slide-visible-once-right>
        <div class="p-8 ">
          <h2 class=" font-bold text-3xl">
            What is Lowballd?
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
          </p>
          <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring cursor-pointer text-sm font-medium" @click="login()">
          Get started
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="mb-20 py-16 px-8">
    <div
      class="grid grid-cols-2 gap-y-8 gap-x-16 items-center">
      <div class= " pl-[10%] pr-[10%] text-center ease-in duration-[180ms]" v-motion-slide-visible-once-left>
        <h2 class="text-3xl font-bold ">Find your style</h2>
        <p class="mt-4 text-gray-600 text-lg">
          Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Lowballd.
        </p>
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/feed"
        >
          <span class="text-sm font-medium"> Browse more </span>
        </a>
      </div> 
      <div class=" ease-in duration-[150ms]" v-motion-slide-visible-once-right>   
        <section>
          <div class="content">
            <div class="carrousel">
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/2I3OaWW2bWHgka7uk0px2m/fbf148955eefc10e5b7e66d106016375/ShopByStyle_Web-AvantGarde.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/64c54eca4b895d9aba3ca6aad1465d1e/ShopByStyle_Web-Vintage4.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/7767e0a2dcd4dff3fd77e46297121e3c/ShopByStyle_Web-Tech3.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/1itLXxA6Ajm41pG1sU7HuN/7f295c2f005a71791794b4f19a18d384/ShopByStyle_Web-Minimal-2.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/73f89a357d1de4f379d7cf7bcdb9cbee/Style_5.png?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/LBz479rx3wuqhRNA98TFf/3dd1e89db00c87079df8eb9a8fa43a10/Streetwear.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/0a7cfd535f322ea919dd90e5e32041e5/Style_4.png?fm=webp&h=245&w=390"></figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>        
<section>
  <div class=" py-16 mx-auto px-8 mb-20">
    <div class="grid grid-cols-2 h-screen">
      <div class="relative z-10 py-16">
        <div class="relative h-full ease-in duration-[180ms]" v-motion-slide-visible-once-left>
          <img
            class="absolute inset-0 object-cover w-full h-full "

            src="https://i.cbc.ca/1.5164075.1559771487!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/selling-online.jpg"
            alt="Indoors house"
          />
        </div>
      </div>
        
      <div class="relative flex items-center ease-in duration-[180ms]" v-motion-slide-visible-once-right>
        <div class="p-8">
          <h2 class=" font-bold text-3xl">
            Sell your clothes
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            Want to sell used clothes? Try Lowballd. List your clothes fast and sell with no fees. No space left in your closet? List it in our marketplace to declutter your closet space. Simply don't enjoy one of your fashion pieces anymore? Like that saying - one man's trash can be another man's treasure. 
          </p>
          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/sell">
            Start selling
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>

  <div class=" mt-[10%] mb-[5%] py-16 px-8">
    <div
      class="grid grid-cols-2 gap-y-8 gap-x-16 items-center">
        <div class= "pb-[10rem] text-center ease-in duration-[180ms] pl-[10%] pr-[10%]" v-motion-slide-visible-once-left>
          <h2 class="text-3xl font-bold ">Expand your wardrobe</h2>
          <p class="mt-4 text-gray-600 text-lg">
            Improving a wardrobe is an ongoing process, but knowing where to start is the first step. Evaluate how your wardrobe could stand to improve. Weed out pieces you hate, and then slowly introduce new, better pieces into your closet to replace them. Then simply go on Lowballd and find those pieces.
          </p>
          <a
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/marketplace"
            >
            <span class="text-sm font-medium">Start buying</span>
          </a>
      
      <div class="slider ease-in duration-[50ms] " v-motion-fade-visible-once>
        <input type="radio" name="slide_switch" id="id5"/>
	        <label for="id5">
		        <img src="https://www.organizedinteriors.com/blog/wp-content/uploads/2017/12/her-closet-2.jpg" width="100"/>
	        </label>
	          <img src="https://www.organizedinteriors.com/blog/wp-content/uploads/2017/12/her-closet-2.jpg"/>
	      <input type="radio" name="slide_switch" id="id1"/>
	        <label for="id1">
		        <img src="https://cdn.decoist.com/wp-content/uploads/2021/04/Sliding-frosted-glass-doors-used-for-the-small-mens-closet-in-the-contemporary-bedroom-46906.jpg" width="100"/>
	        </label>
	          <img src="https://cdn.decoist.com/wp-content/uploads/2021/04/Sliding-frosted-glass-doors-used-for-the-small-mens-closet-in-the-contemporary-bedroom-46906.jpg"/>
	      <input type="radio" name="slide_switch" id="id2" checked="checked"/>
	        <label for="id2">
		        <img src="https://www.tilghmanbuilders.com/hs-fs/hubfs/AA/Master%20suite%20addition%20%7C%20closet%20design%20ideas%20%7C%20shelving.jpg?width=750&name=Master%20suite%20addition%20%7C%20closet%20design%20ideas%20%7C%20shelving.jpg" width="100"/>
	        </label>
	          <img src="https://www.tilghmanbuilders.com/hs-fs/hubfs/AA/Master%20suite%20addition%20%7C%20closet%20design%20ideas%20%7C%20shelving.jpg?width=750&name=Master%20suite%20addition%20%7C%20closet%20design%20ideas%20%7C%20shelving.jpg"/>
	      <input type="radio" name="slide_switch" id="id3"/>
	        <label for="id3">
		        <img src="https://alexkwa.com/wp-content/uploads/2019/04/DSC02537-1200x800.png" width="100"/>
	        </label>
	          <img src="https://alexkwa.com/wp-content/uploads/2019/04/DSC02537-1200x800.png"/>
	      <input type="radio" name="slide_switch" id="id4"/>
	        <label for="id4">
		        <img src="https://www.closetworksinc.com/wp-content/uploads/2021/08/M_DSC7099_1200.jpg" width="100"/>
	        </label>
	          <img src="https://www.closetworksinc.com/wp-content/uploads/2021/08/M_DSC7099_1200.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="grid grid-cols-1 gap-y-8 gap-x-16 items-center ease-in duration-[180ms]" v-motion-fade-visible-once>
    <div class= "p-8 mx-auto text-center ease-in duration-    [180ms]" v-motion-fade-visible>
      <h2 class="text-3xl font-bold ">Share your outfit</h2>
        <p class="mt-4 text-gray-600 text-lg text-center pl-[20%] pr-[20%] whitespace-normal">
            The clothes a person wears tells us many things: their status in life, for example, or their cultural affiliation or identity. They can tell us what era they live in, and even a person’s current state of mind or intent. Potraying your clothing will help you create fuller, richer character portraits. Share your outfits so everyone can better understand who you are.
        </p>
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/shareoutift"
        >
          <span class="text-sm font-medium"> Start posting </span>
        </a>
      </div>
    </div>
  <div class="flex flex-row h-[40rem] mx-auto overflow-hidden ease-in duration-[100ms] mb-10">
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7  "
      style="background-image:url(https://preview.redd.it/fehgbh015ig81.jpg?auto=webp&s=fdaaf46f0d7b926b5bf7579494bea482b35b468d)"></div>
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/25/08/ts-lindseybyrnes-sim-2885-e.jpg?width=1200)"></div>
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/26/16/istock-1005864440.jpg?width=1200)"></div>
    <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://www.vmcdn.ca/f/files/rwcpulse/images/redwoodcitypulse/stories/katsy_skatebaording_02_web-1536x1024.jpg;w=1200;h=800;mode=crop)"></div>
    <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://sm.mashable.com/mashable_sea/article/d/dont-flip-/dont-flip-olivia-rodrigos-collab-with-casetify-is-a-90s-tech_dngf.jpg)"></div>
  </div> 
</section>
<section class="mb-64">
  <div class=" pl-[20rem] pr-[40rem] pt-[15rem] ">
      <div class=" text-center ease-in duration-[180ms] h-[20rem]" v-motion-fade-visible-once>
        <h2 class="text-3xl font-bold sm:text-4xl mt-[10%]">Reach out</h2>
        <p class="mt-4 text-gray-600 text-lg">
          The world is constantly evolving and so is Lowballd. We are always open for suggestions and ideas from our community. Most questions can be answered on our FAQ page but contact us if you cannot find a resolution there.
        </p>
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/Contact"
        >
          <span class="text-sm font-medium"> Contact us </span>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 ease-in duration-[200ms]" v-motion-slide-visible-once-left>
      <div class="relative w-full max-w-lg">
        <div class="bg-center bg-cover absolute -top-10 left-[250%] w-72 h-72 animate-blob" 
        style="background-image:url(https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg)"></div>
        <div class="bg-center bg-cover absolute top-0 -right-[37%] w-52 h-52 animate-blob"
        style="background-image: url(https://i.pinimg.com/originals/dc/6b/28/dc6b2804bd65cc163b19849c46f063b0.jpg)"
        ></div>
        <div class=" bg-center bg-cover absolute -bottom-52 -left-[-10%] w-72 h-72 animate-blob"  
        style="background-image:url(https://i.ibb.co/syVc8bK/IMG-7616.png)"></div>
        <div class="bg-center bg-cover absolute top-0 -right-[24%] w-52 h-52 animate-blob" 
        style="background-image:url()"></div>
        <div class="bg-center bg-cover absolute bottom-32 -left-[-10%] w-52 h-72 animate-blob" 
        style="background-image:url(https://i.ibb.co/XZwc6bM/IMG-E7607.jpg)"></div>
        <div class="bg-center bg-cover absolute -top-40 pt-[10%] left-[190%] w-52 h-52 animate-blob " 
        style="background-image:url(https://ibb.co/ScJsy6M"><img src="https://i.ibb.co/W0sx5HM/IMG-E7604.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-32 left-[260%] w-72 h-72 animate-blob" 
        style="background-image:url(https://i.ibb.co/kDv5dyg/IMG-E7614-1.jpg)"></div>
    </div>
  </div>
</section>
<Footer/>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    GlobalNavbar, Footer,
  },
  // Log the user in
methods: {
    // Log the user in
    async login() {
      this.$auth.loginWithRedirect({
        returnTo: window.location.origin,
      });
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
 * {
	 box-sizing: border-box;
}
 video {
	 position: absolute;
	 top: 5 rem;
	 left: 0;
	 width: 100%;
	 object-fit: cover;
	 object-position: center;
}
 div#fashion {
	 min-height: 100vh;
	 display: flex;
	 align-items: center;
	 justify-content: center;
}
.slider{
	width: 640px;
	position: relative;
  left: 120%;
  top: 2rem;
}
.slider>img{
	position: absolute;
	left: 0; bottom: 130%; 
	transition: all 0.5s;
}
.slider input[name='slide_switch'] {
	display: none;
}
.slider label {
	margin: 15px 0 0 18px;
	border: 3px solid #999;
	float: left;
	cursor: pointer;
	transition: all 0.5s;
	opacity: 0.6;
}
.slider label img{
	display: block;
}
.slider input[name='slide_switch']:checked+label {
	border-color: #666;
	opacity: 1;
}
.slider input[name='slide_switch'] ~ img {
	opacity: 0;
	transform: scale(1.1);
}
.slider input[name='slide_switch']:checked+label+img {
	opacity: 1;
	transform: scale(1);
}
.content{
  left: 35%;
  width:200px;
  perspective: 1000px;
  position: relative;
  padding-bottom: 30%;
} 
.carrousel{
  width:100%;
  position: absolute;
  height: ;
  animation: rotate 15s infinite linear;
  transform-style: preserve-3d;
}
.carrousel:hover{
  animation-play-state: paused;
  cursor: pointer;
  
}
.carrousel figure{
  width:90%;
  height:200px;
  position: absolute;
}
.carrousel img{
  image-rendering: auto;
  transition: all 300ms;
  width: 100%;
  height: 100%
  
}
.carrousel img:hover{
  transform: scale(1.1) ;
  transition:all 1000ms;
}
  @keyframes rotate{
    0% {
      transform: rotateY(0deg) ;
   }
   100% {
      transform: rotateY(360deg);
   }
  } 
.carrousel figure:nth-child(1) { transform:rotateY(0deg) translateZ(300px); }
.carrousel figure:nth-child(2) { transform:rotateY(40deg) translateZ(300px); }
.carrousel figure:nth-child(3) { transform:rotateY(80deg) translateZ(300px); }
.carrousel figure:nth-child(4) { transform:rotateY(120deg) translateZ(300px); }
.carrousel figure:nth-child(5) { transform:rotateY(160deg) translateZ(300px); }
.carrousel figure:nth-child(6) { transform:rotateY(200deg) translateZ(300px); }
.carrousel figure:nth-child(7) { transform:rotateY(240deg) translateZ(300px); }
.carrousel figure:nth-child(8) { transform:rotateY(280deg) translateZ(300px); }
.carrousel figure:nth-child(9) { transform:rotateY(320deg) translateZ(300px); }
  
  
</style>




