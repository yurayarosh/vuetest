<template>

    <!-- begin about -->
    <div class="about">

      <div class="container">

        <h2 class="title js-animated-block">What We Are All About</h2>

        <div class="desc js-animated-block">
          <p>It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus on great user experience.</p>
          <p>You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and freebies.</p>
          <p>Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!</p>
        </div>

        <!-- begin team -->
        <div class="team js-animated-block">
          <div class="team__title">
            <h2 class="title">Meet Our Team!</h2>
          </div>

          <team-member
             v-for="member in team" 
             :key="member.id"
             :img="member.img"
             :title="member.title"
             :desc="member.desc"
           />
           
        </div>
        <!-- end team -->

      </div>

    </div>
    <!-- end about -->

</template>

<script>
  import teamMember from '@/components/teamMember';
  import animBlocks from '@/mixins/animBlocks';
  export default{
    name: 'about',
    components: {
      teamMember
    },
    data(){
      return{
        team: [
          {
            id: 1,
            img: '/member.jpg',
            title: 'Kimberly Thompson <span>Founder & CEO</span>',
            desc: '<p>Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.</p>'
          },
          {
            id: 2,
            img: '/member.jpg',
            title: 'Kimberly Thompson <span>Founder & CEO</span>',
            desc: '<p>Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.</p>'
          },
          {
            id: 3,
            img: '/member.jpg',
            title: 'Kimberly Thompson <span>Founder & CEO</span>',
            desc: '<p>Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.</p>'
          },
          {
            id: 4,
            img: '/member.jpg',
            title: 'Kimberly Thompson <span>Founder & CEO</span>',
            desc: '<p>Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.</p>'
          },
          {
            id: 5,
            img: '/member.jpg',
            title: 'Kimberly Thompson <span>Founder & CEO</span>',
            desc: '<p>Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.</p>'
          }
        ]
      }
    },
    mixins: [animBlocks]

  };
</script>

<style lang="sass">

@import '../sass/fonts'

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



</style>