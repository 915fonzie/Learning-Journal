const blogsArr = [
  {
    name: "Blog one",
    date: "May 25, 2024",
    title: "My new journey as a bootcamp student.",
    paragraph: `
            After several months of learning in the Frontend Developer Career Path,
            I've made the big jump over to the Bootcamp to get expert code reviews of my Solo 
            Projects and meet like-minded peers.///

            <span class="bold">How I stay committed to learning</span>

            I like to thing of myself as a lifelong learner. I used to spend hours and hours learning, 
            then try to create simple projcts using what I learned or work new techniques into existing projects.
            
            While that was fun, I felt like it would be helpful to share what 
            I was learning and most things about my journey with the world.
            
            <span class="bold">How I got started</span>

            I started simple and gradually grew my learning journal site. I would take notes about what I was learning. 
            After each learning session, I'd use my notes to not only reflect on what I learned but also write short 
            summaries of what I learned using my own words.
            
            That helped me grow what I was learning, and I realized that posting my learning summaries was 
            also helping others learn and stay motivated.`,
  },
  {
    name: "Blog two",
    date: "May 25, 2024",
    title: "Blog two",
    paragraph: `
            I'm excited to start a new learning journey as a Scrimba Bootcamp student! 
            After several months of learning in the Frontend Developer Career Path.///
            `,
  },
  {
    name: "Blog three",
    date: "May 25, 2024",
    title: "Blog three",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog four",
    date: "May 25, 2024",
    title: "Blog four",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog five",
    date: "May 25, 2024",
    title: "Blog five",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog six",
    date: "May 25, 2024",
    title: "Blog six",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog seven",
    date: "May 25, 2024",
    title: "Blog seven",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog eight",
    date: "May 25, 2024",
    title: "Blog eight",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog nine",
    date: "May 25, 2024",
    title: "Blog nine",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
  {
    name: "Blog ten",
    date: "May 25, 2024",
    title: "Blog ten",
    paragraph: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras tempus ipsum sed arcu vehicula porttitor at et justo.
            Pellentesque convallis vulputate purus vitae dictum.///

            Fusce posuere augue sit amet aliquet euismod. Donec vestibulum risus non purus scelerisque,
            gravida suscipit sem mattis. Donec ac orci metus. Etiam rhoncus sem sed posuere suscipit.
            Proin eget fermentum erat, ut posuere metus. Aliquam erat volutpat. Pellentesque in sem
            et nisl lacinia dignissim. Maecenas porttitor convallis magna in semper.
            Vivamus vestibulum dui massa. Phasellus id ligula in quam porttitor pharetra.
            Etiam et odio vel leo suscipit lacinia. Duis faucibus cursus sagittis.
            Nulla tempor metus nec libero pharetra, accumsan facilisis mi lobortis. Aliquam erat volutpat.
            Suspendisse sed pretium sapien.

            Duis ut dignissim dolor, a fringilla mi. Duis a velit vitae sem pulvinar fermentum sit amet eget ex.
            Integer a fringilla tortor, quis auctor massa. Integer aliquam semper nisl a aliquam.
            Suspendisse semper commodo augue in posuere. Quisque egestas dignissim nisi,
            eu accumsan odio fringilla vitae. Ut fringilla lectus vel elit imperdiet, et
            eleifend sapien iaculis. Aliquam vitae sodales libero. Nam dictum maximus
            lacus eget pellentesque. Praesent ac tortor aliquet, sodales felis id, mattis velit.
            Suspendisse potenti. Donec ut orci dictum, fermentum nibh ac, tincidunt elit.
            Pellentesque pulvinar lorem ac magna consequat, vitae scelerisque est ornare.
            Vestibulum finibus rutrum vulputate.`,
  },
]

export default blogsArr