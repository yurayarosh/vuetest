<template>
  <!-- begin about -->
  <div class="about">

    <div class="container">

      <h2 class="title">What We Are All About</h2>

      <div class="desc">
        <p>It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting 
          advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus 
          on great user experience.</p>
          <p>You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a 
            daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and 
            freebies.</p>
            <p>Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!</p>
          </div>


          <!-- begin team -->
          <div class="team">
            <div class="team__title">
              <h2 class="title">Meet Our Team!</h2>
            </div>

            <div class="member">
              <div class="member__img"><img src="../../assets/img/member.jpg" alt=""></div>
              <div class="member__title">
                Kimberly Thompson
                <span>Founder & CEO</span>
              </div>
              <div class="member__desc">
                <p>Kimberly is the founder and the 
                  CEO of our company. With 10 
                  years of experience in the tech 
                  industry, she ensures all operations 
                  are running smoothly.</p>
                </div>
              </div>
              <div class="member">
                <div class="member__img"><img src="../../assets/img/member.jpg" alt=""></div>
                <div class="member__title">
                  Kimberly Thompson
                  <span>Founder & CEO</span>
                </div>
                <div class="member__desc">
                  <p>Kimberly is the founder and the 
                    CEO of our company. With 10 
                    years of experience in the tech 
                    industry, she ensures all operations 
                    are running smoothly.</p>
                  </div>
                </div>
                <div class="member">
                  <div class="member__img"><img src="../../assets/img/member.jpg" alt=""></div>
                  <div class="member__title">
                    Kimberly Thompson
                    <span>Founder & CEO</span>
                  </div>
                  <div class="member__desc">
                    <p>Kimberly is the founder and the 
                      CEO of our company. With 10 
                      years of experience in the tech 
                      industry, she ensures all operations 
                      are running smoothly.</p>
                    </div>
                  </div>
                  <div class="member">
                    <div class="member__img"><img src="../../assets/img/member.jpg" alt=""></div>
                    <div class="member__title">
                      Kimberly Thompson
                      <span>Founder & CEO</span>
                    </div>
                    <div class="member__desc">
                      <p>Kimberly is the founder and the 
                        CEO of our company. With 10 
                        years of experience in the tech 
                        industry, she ensures all operations 
                        are running smoothly.</p>
                      </div>
                    </div>
                    <div class="member">
                      <div class="member__img"><img src="../../assets/img/member.jpg" alt=""></div>
                      <div class="member__title">
                        Kimberly Thompson
                        <span>Founder & CEO</span>
                      </div>
                      <div class="member__desc">
                        <p>Kimberly is the founder and the 
                          CEO of our company. With 10 
                          years of experience in the tech 
                          industry, she ensures all operations 
                          are running smoothly.</p>
                        </div>
                      </div>

                    </div>
                    <!-- end team -->

                  </div>

      </div>
  <!-- end about -->
</template>

<script>
  export default{
    name: 'about',

  };
</script>

<style lang="sass">

@import '../../sass/fonts'

.about
  padding-top: 50px
  padding-bottom: 25px
.desc
  font-size: 16px
  color: #111
  border-bottom: 1px solid  #e0e0e0
  margin-bottom: 55px
  p
    padding-bottom: 35px

.team
  font-size: 0
  text-align: center
  &__title
    margin-bottom: 60px

.member
  display: inline-block
  vertical-align: top
  width: 33.33333%
  font-size: 16px
  text-align: center
  padding-left: 40px
  padding-right: 40px
  margin-bottom: 70px
  &__img
    border-radius: 50%
    width: 220px
    height: 220px
    margin: 0 auto
    margin-bottom: 25px
    img
      max-width: 100%
  &__title
    font-size: 18px
    color: #111
    margin-bottom: 30px
    +f-proxima-bold
    span
      +f-proxima
      color: #555
      font-size: 16px
      display: block
  &__desc
    font-size: 16px
    color: #111

</style>