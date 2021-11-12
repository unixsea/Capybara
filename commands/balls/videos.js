const response = [
  "https://cdn.discordapp.com/attachments/767390925051133984/906690042062340136/My_Video4.mp4",
  "https://cdn.discordapp.com/attachments/889004473983324186/904762142018895952/videoplayback.mp4",
  "https://cdn.discordapp.com/attachments/803669027955408947/899556171923464222/Ok_i_pullup_1.mp4",
  "https://youtube.com/shorts/JyHUyb-RePA?feature=share",
  "https://www.youtube.com/watch?v=Xm32iY8Wi-8",
  "https://www.youtube.com/watch?v=ClNQS1tfNOk",
  "https://www.youtube.com/watch?v=nFdethgE3fs",
  "https://www.youtube.com/watch?v=78F_YdTUHM4",
  "https://www.youtube.com/watch?v=HvHurkRs5MM",
  "https://www.youtube.com/watch?v=guibQH94rCM",
  "https://www.youtube.com/watch?v=C7xyoPqYkYM",
  "https://www.youtube.com/watch?v=gOqKwCyA0QM",
  "https://www.youtube.com/watch?v=APJZeNY6dKo&t=10s",
  "https://www.youtube.com/watch?v=5fQGTELVps8",
  "https://www.youtube.com/watch?v=njTxJMXvQnI",
  "https://www.youtube.com/watch?v=SCwcJsBYL3o",
  "https://www.youtube.com/watch?v=Ba3ZT7jU5vQ",
  "https://www.youtube.com/watch?v=E0veIxjkdKo",
  "https://www.youtube.com/watch?v=YbVQDEBdcow",
  "https://www.youtube.com/watch?v=V36bCahm1nU",
  "https://www.youtube.com/watch?v=6LxK7iFChVI",
  "https://www.youtube.com/watch?v=XSBoQPnd6q8",
  "https://www.youtube.com/watch?v=xguC02VEcIw",
  "https://www.youtube.com/watch?v=Uq_JjGcyE3c",
  "https://www.youtube.com/watch?v=FR3i0qKzRvg",
  "https://www.youtube.com/watch?v=S0TvK1PHzz8",
  "https://www.youtube.com/watch?v=5EYLkiW7kBE",
  "https://www.youtube.com/watch?v=FnPxMXHRGgw",
  "https://www.youtube.com/watch?v=d3SBpIKdISU",
  "https://www.youtube.com/watch?v=J_BUiGz5s7I"
];

module.exports = {
  name: "videos",
  description: "we luv videos homie",
  execute(client, message, args) {
    message.channel.send(`${response[Math.floor(Math.random() * videos.length)]}`);
  },
};
