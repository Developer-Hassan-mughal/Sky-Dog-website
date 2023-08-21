window.addEventListener("DOMContentLoaded",function(){


        function timelineOne(){
            var tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#header-1",
                    start: "top top",
                    scrub:2,
                    // markers: true
                }
            })

            tl1.to(" #head1 , #para1",{
                transform: "translate(0,-70%)",
                ease:Expo,
                stagger:.1

            },"flag1")
            

            tl1.to(" #bttn1",{
                scale:1.2,
                ease:Power1,
                // stagger:.1,
                delay:.2

            },"flag1")
            

            tl1.to("video",{
                // scale:.7,
                ease:Expo,
                delay:.3,
                filter: "blur(15px)",
                scale: 1.2

            },"flag1")

        }

        function timelineSec(){
            var tl2 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".main_box",
                    start: "top bottom",
                    end: "top 10%",
                    scrub:2,
                    // markers: true,
                }
            })

            
            tl2.set(" #head2 , #para2 ",{
                x: 0,
                opacity:1,
            })
            tl2.set(" #bttn2",{
                scale:1,
                opacity:1,
            })


            tl2.from("#img1",{
                opacity: 0,
                scale:.5,
                ease:Power1,
                delay:.3,
                stagger:1,

            },"flag1");


            tl2.from(" #head2 , #para2",{
                x: -200,
                ease:Power1,
                stagger:.5,
                delay:.7,
                opacity:0

            },"flag1")
            
            tl2.from(" #bttn2",{
                scale:0.7,
                ease:Power1,
                delay:1

            },"flag1")
            
            

        }

        function timelineThree(){
            var tl3 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#header-2",
                    start: "top bottom",
                    end: "bottom 30%",
                    scrub:2,
                    // markers: true, 
                }
            })


            tl3.set(" .cards_list , .linkss ",{
                y: 100,
                opacity:0,
            })


            tl3.to(" .cards_list , .linkss",{
                y: 0,
                ease:Expo,
                stagger:.5,
                opacity:1
            })

            

        }

        function timelineFour(){
            var tl4 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#header-3",
                    start: "top bottom",
                    end: "10% 0%",
                    scrub:2,
                    // markers: true, 
                }
            })


            
            tl4.set(" .head3 , .para3 ",{
                x: -200,
                opacity:0,
            })
            tl4.set(" .bttn3",{
                scale:1,
                opacity:1,
            })
        
            tl4.to(" .head3 , .para3",{
                x: 0,
                ease:Power1,
                stagger:.5,
                delay:1,
                opacity:1
                
            },"flag1")
            
            tl4.from(" .bttn3",{
                scale:0.5,
                ease:Power1,
                delay:1
                
            },"flag1")
            
            tl4.from(".img2",{
                opacity: 0,
                scale:.5,
                ease:Power1,
                delay:1,
                stagger:1,

            },"flag1");

        }

        function timelinefive(){
            var tl5 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".fifth_section",
                    start: "top bottom",
                    end: "10% 0%",
                    scrub:2,
                    // markers: true,
                }
            })

            tl5.set(" .head4 , .para4 ",{
                y: -200,
                opacity:0,
            })
        
            tl5.to(" .head4 , .para4",{
                y: 0,
                ease:Power1,
                stagger:.5,
                delay:.5,
                opacity:1
                
            },"flag1")
            
            tl5.from(".img3",{
                opacity: 0,
                scale:.5,
                ease:Power1,
                delay:1.2,
                stagger:1,

            },"flag1");

        }

        function timelinesix(){
            var tl6 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".six_section",
                    start: "top bottom",
                    end: "top",
                    scrub:2,
                    // markers: true,
                }
            })

            tl6.set(" .head5 , .para5 , .email , .btn",{
                y: 100,
                opacity:0,
            })
        
            tl6.to(" .head5 , .para5 ,.email , .btn",{
                y: 0,
                ease:Power1,
                stagger:.5,
                delay:.5,
                opacity:1
                
            })
            
        }

        function timeline7(){
            var tl7 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".viewport_footer",
                    start: "top bottom",
                    end: "top 60%",
                    scrub:2,
                }
            })
            
            tl7.set(" .fb_images, .footer_logo, .para6, .inner_list-content",{
                y: 50,
                opacity:0,
            })
        
            tl7.to(" .fb_images, .footer_logo, .para6, .inner_list-content",{
                y: 0,
                ease:Power1,
                stagger:.5,
                delay:1,
                opacity:1
                
            })
            
        }

        timelineOne()
        timelineSec()
        timelineThree()
        timelineFour()
        timelinefive()
        timelinesix()
        timeline7()

})