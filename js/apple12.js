$(function(){
   var specList=$(".preview_list .spec_list ul li");
   var previewImg=$(".preview_img a img");
   var previewImgWarp=$(".preview_img");
   var previewImgBig=$(".preview_img_big img");
   var previewBig=$(".preview_img_big");
   var specForward=$(".preview_list .spec_forward");
   var specBackward=$(".preview_list .spec_backward");
   var specListUl=$(".spec_list ul");
   var mask=$(".preview_img .mask");
   var closeVideo=$(".close_video");
   var previewBtn=$(".preview_btn");
   var videoBtn=$(".video_btn")
   var vVideo=$(".v_video");

   vVideo.mouseout(function(){
      previewBig.css("border","");
      previewImgBig.css("display","block");
      mask.css("display","block");
      // previewImgWarp.css("zIndex","100");
   })
   closeVideo.click(function(){
      vVideo.css("display","none");
   })
   var arrImg=["apple12_img/apple12-m1.jpg","apple12_img/apple12-m2.jpg","apple12_img/apple12-m3.jpg","apple12_img/apple12-m4.jpg","apple12_img/apple12-m5.jpg","apple12_img/apple12-m6.jpg","apple12_img/apple12-m7.jpg",]
   specList.mouseover(function(){
    var index=$(specList).index(this);
     $(this).addClass("select").siblings().removeClass("select");
     previewImg.attr("src",arrImg[index]);
     previewImgBig.attr("src",arrImg[index]);
   })
   specForward.click(function(){
    specListUl.css("marginLeft","0")
   })
   specBackward.click(function(){
    specListUl.css("marginLeft","-152px")
   })
   previewImgWarp.mouseout(function(){
    mask.css("display","none");
    previewBig.css("display","none");
    previewBtn.css( "zIndex", "0");
   })
   previewImgWarp.mousemove(function(ev){
      previewImgWarp.css("zIndex","100");
    mask.css("display","block");
    previewBig.css("display","block");
      var x=ev.pageX-previewImg.offset().left-mask.width()/2;
      var y=ev.pageY-previewImg.offset().top-mask.height()/2;
      var l=previewImg.innerWidth()-mask.outerWidth();
      var t=previewImg.innerHeight()-mask.outerHeight();
     
      if(x<=0){
       x=0;
      }else if(x>=l){
       x=l;
      }
      if(y<=0){
       y=0;
      }else if(y>=t){
       y=t;
      }
      mask.css("left",`${x+"px"}`);
      mask.css("top",`${y+"px"}`);
      previewBig.scrollLeft(previewImgBig.width()/mask.width()*x);
      previewBig.scrollTop(previewImgBig.height()/mask.height()*y);
      console.log(x,y)
      if(x>=40||x<=110){
         previewBtn.css( "zIndex", "99");
         videoBtn.click(function(){
            vVideo.css("display","block");
            vVideo.css("zIndex","100");
            vVideo.mousemove(function(){
               previewBig.css("border","0");
               previewImgBig.css("display","none");
               previewImgWarp.css("zIndex","100");
               // vVideo.css("zIndex","100");
               // mask.css("display","none");   
            })
         })
      
      }
   })


   var nsServicesUl=$(".ns_services ul");
   var nsServices=$(".ns_services");
   var nsServicesArrow=$(".ns_services .arrow");

   nsServices.mouseover(function(){
    nsServicesUl.css({
     height:"60px",
     width:"217px",
     border:"1px solid #ccc",
    })
    nsServicesArrow.css("transform","rotate(180deg)");
   })
   nsServices.mouseout(function(){
    nsServicesUl.css({
     height:"20px",
     width:"217px",
     border:"none",
    })
    nsServicesArrow.css("transform","rotate(0deg)");
   })
     


   var btnAdd=$(".btn_add")
   var btnReduce=$(".btn_reduce")
   var buyNum=$(".buy_num")
   var chooseHead=$(".choose_baitiao .item .choose_head");
   var moreItemspriteCheckbox=$(".more_item .sprite_checkbox");
   var moreItem=$(".more_item");
   var ybItem=$(".yb_item_cat");
   var service=$(".choose_service_1 .service");
   var serviceBody=$(".choose_service_1 .service .service_body");
   var serviceBodyspriteCheckbox=$(".service_body .sprite_checkbox");
   var chooseBaitiaoItem=$(".choose_baitiao .item");
   var moreItemName=$(".choose_service .yb_item .name");
   console.log(moreItemName)
   var boo=false;
   moreItemspriteCheckbox.click(function(){
      // var index=moreItemspriteCheckbox.index(this);
      if(boo){
         $(this).html("");
         $(this).parents(".more_item").css("display","block");
         $(this).parent().siblings().find(moreItemspriteCheckbox).html("");
         boo=true;
      }else{
         $(this).html("√");
         $(this).parents(".more_item").css("display","none");
         $(this).parent().siblings().find(moreItemspriteCheckbox).html("");
         var name=$(this).siblings('.name').html();
         $(this).parents(".more_item").siblings().find(".name").html(name);
         var price=$(this).siblings('.price').html();
         $(this).parents(".more_item").siblings().find(".price").html(price);
         boo=false;
      }
    

      // chooseBaitiaoItem.css("border","1px dotted #dfdfdf");
      // chooseBaitiaoItem.hover("border","1px dotted #dfdfdf");
      // if($(this).html()==""){
      //    chooseBaitiaoItem.css("border","");
      //    chooseBaitiaoItem.hover("border","");
      // }
   })
   var boo1=true;
   serviceBodyspriteCheckbox.click(function(){
       if(boo1){
         $(this).html("√");
         $(this).parents(".service_body").css("display","none");
         boo1=false;
       }else{
         $(this).html("");
         $(this).parents(".service_body").css("display","block");
         boo1=true;
       }
      // chooseBaitiaoItem.css("border","1px dotted #dfdfdf");
      // chooseBaitiaoItem.hover("border","1px dotted #dfdfdf");
      // if($(this).html()==""){
      //    chooseBaitiaoItem.css("border","");
      //    chooseBaitiaoItem.hover("border","");
      // }
   })
   // moreItemspriteCheckbox.click(function(){
   //    if(boo1){
   //       $(this).html("√");
   //       $(this).parents(".more_item").css("display","none");
   //       $(this).parent().siblings().find(moreItemspriteCheckbox).html("");
   //       boo1=false;
   //    }else{
   //       $(this).html("");
   //       $(this).parents(".more_item").css("display","block");
   //       $(this).parent().siblings().find(moreItemspriteCheckbox).html("");
   //       boo1=true;
   //    }
    

      // chooseBaitiaoItem.css("border","1px dotted #dfdfdf");
      // chooseBaitiaoItem.hover("border","1px dotted #dfdfdf");
      // if($(this).html()==""){
      //    chooseBaitiaoItem.css("border","");
      //    chooseBaitiaoItem.hover("border","");
      // }
   // })



   ybItem.mouseover(function(){
      var index=ybItem.index(this);
      moreItem.eq(index).css("display","block");
   })
   ybItem.mouseout(function(){
      var index=ybItem.index(this);
      moreItem.eq(index).css("display","none");
   })
   service.mouseover(function(){
      var index=service.index(this);
      serviceBody.eq(index).css("display","block");
   })
   service.mouseout(function(){
      var index=service.index(this);
      serviceBody.eq(index).css("display","none");
   })
 
   
   var num=1;
   btnAdd.click(function(){
      if(num>=2){
         btnReduce.css("cursor","pointer")  
      }
      num++;
      buyNum.val(`${num}`);
      // chooseHead.eq(1).html("分期"+Math.floor(chooseHead.eq(1).html().slice(1,8)*num)+"x3期")
      // console.log("分期"+Math.floor(chooseHead.eq(1).html().slice(1,8)*num)+"x3期")

   })
 
   btnReduce.click(function(){
      if(num<=2){
         num=2;
         btnReduce.css("cursor","not-allowed")    
      }
      num--;
      buyNum.val(`${num}`);
   
   })



})