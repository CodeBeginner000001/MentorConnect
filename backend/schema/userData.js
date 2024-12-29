let userData = [
  {
    "id": 1,
    "name": "Alice Green",
    "bio": "Alice Green is a passionate mentor who specializes in front-end technologies, including React and Angular. She enjoys sharing her knowledge with aspiring developers and guiding them through complex coding challenges.",
    "image": "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1734807262~exp=1734810862~hmac=1329396f7b4357a532fd9ac58e8ed6f8310f1b7dbf243ed659bd2cec74364627&w=1060",
    "email": "alicegreen2@example.com",
    "password": "hashedpassword1",
    "skills": ["React", "Angular", "JavaScript"],
    "interests": ["Reading", "Swimming", "Lawn Tennis"],
    "role": "Mentor"
  },
  {
    "id": 2,
    "name": "Ethan Brown",
    "bio": "Ethan Brown is an enthusiastic mentee exploring the intricacies of backend development. He is keen to learn more about Node.js and Python to build robust APIs and services.",
    "image": "https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?t=st=1734808522~exp=1734812122~hmac=681d120630cc99df90a4a3611b49181f443b52d9d7e25ef03ed849411c172a06&w=740",
    "email": "ethanbrown2@example.com",
    "password": "hashedpassword2",
    "skills": ["Node.js", "Python"],
    "interests": ["Travel", "Bike Riding", "Communication"],
    "role": "Mentee"
  },
  {
    "id": 3,
    "name": "Sophia Davis",
    "bio": "Sophia Davis is a mentor with expertise in full-stack development, with a strong command of Vue.js and C++. She is dedicated to helping mentees master advanced coding techniques.",
    "image": "https://img.freepik.com/free-psd/portrait-teenager-boy-white-hoodie-white-background_1142-53558.jpg?t=st=1734808761~exp=1734812361~hmac=139ad6c2385126e40ea7e945c806aee98329bb54ba1e31f7dc4888f330c06b8b&w=740",
    "email": "sophiadavis3@example.com",
    "password": "hashedpassword3",
    "skills": ["Vue.js", "C++", "JavaScript"],
    "interests": ["Mountain Climbing", "Cricket", "Reading"],
    "role": "Mentor"
  },
  {
    "id": 4,
    "name": "Liam Taylor",
    "bio": "Liam Taylor is a mentee eager to dive into front-end frameworks like Angular and React to create dynamic web applications.",
    "image": "https://img.freepik.com/free-photo/selective-closeup-shot-male-with-bangs-black-shirt-black_181624-4549.jpg?t=st=1734808780~exp=1734812380~hmac=3c374b2edbc4cccecc53671650d4308a458c825a010ca0e85c4b00d9a792634f&w=740",
    "email": "liamtaylor4@example.com",
    "password": "hashedpassword4",
    "skills": ["Angular", "React"],
    "interests": ["Lawn Tennis", "Bike Riding", "Travel"],
    "role": "Mentee"
  },
  {
    "id": 5,
    "name": "Mia Wilson",
    "bio": "Mia Wilson is a skilled mentor who excels in server-side development with Node.js and Python. She enjoys mentoring developers on designing scalable backends.",
    "image": "https://img.freepik.com/free-photo/young-attractive-teenager-man_144627-5716.jpg?t=st=1734808800~exp=1734812400~hmac=5f8c5e38ca6a97c21ed77969f8b5543ee0efec345deebf866625ffc62ab4d387&w=740",
    "email": "miawilson5@example.com",
    "password": "hashedpassword5",
    "skills": ["Node.js", "Python", "Java"],
    "interests": ["Cricket", "Reading", "Communication"],
    "role": "Mentor"
  },
  {
    "id": 6,
    "name": "Oliver Harris",
    "bio": "Oliver Harris is a mentee fascinated by the world of front-end development. He is currently learning Vue.js and JavaScript to enhance his skills.",
    "image": "https://img.freepik.com/free-psd/portrait-young-man-black-t-shirt-isolated-white-background_1142-60715.jpg?t=st=1734808817~exp=1734812417~hmac=45cf986271cdb1c3b9c4c29f2924e0919c431011513ce5d058fb0061c5901376&w=740",
    "email": "oliverharris6@example.com",
    "password": "hashedpassword6",
    "skills": ["Vue.js", "JavaScript"],
    "interests": ["Swimming", "Travel", "Bike Riding"],
    "role": "Mentee"
  },
  {
    "id": 7,
    "name": "Charlotte Martinez",
    "bio": "Charlotte Martinez is a mentor who thrives in simplifying complex concepts for her mentees. With a strong grasp of React and Java, she helps mentees build efficient applications.",
    "image": "https://img.freepik.com/free-photo/man-isolated-showing-facial-emotions_1303-20259.jpg?t=st=1734808840~exp=1734812440~hmac=4d8f8decfb4be0fb865dfa2e97f4ecc04271f5d0f32310a3059448afe9c84d7f&w=1380",
    "email": "charlottemartinez7@example.com",
    "password": "hashedpassword7",
    "skills": ["React", "Java", "JavaScript"],
    "interests": ["Mountain Climbing", "Communication", "Reading"],
    "role": "Mentor"
  },
  {
    "id": 8,
    "name": "Lucas Lee",
    "bio": "Lucas Lee is a mentee working on mastering backend development with C++ and Python. He aims to become proficient in building secure and efficient applications.",
    "image": "https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-camera-surprised-amazed_141793-28319.jpg?t=st=1734808859~exp=1734812459~hmac=4f6d2d8fe4ff90e6b0421a92b7609014271d2fd54fa7c4efbab3ce14118fb3a1&w=1060",
    "email": "lucaslee8@example.com",
    "password": "hashedpassword8",
    "skills": ["C++", "Python"],
    "interests": ["Cricket", "Lawn Tennis", "Travel"],
    "role": "Mentee"
  },
  {
    "id": 9,
    "name": "Isabella Moore",
    "bio": "Isabella Moore is a mentor with a rich background in front-end development. She specializes in Angular and JavaScript, empowering mentees to create dynamic user interfaces.",
    "image": "https://img.freepik.com/free-photo/man-is-happy-smiling-with-his-eyes_114579-13387.jpg?t=st=1734808878~exp=1734812478~hmac=8691037775bf3202d83986380b8cde81fef8ffa5f466c9252c281e5a553dfdbc&w=1380",
    "email": "isabellamoore9@example.com",
    "password": "hashedpassword9",
    "skills": ["Angular", "JavaScript"],
    "interests": ["Photography", "Reading", "Bike Riding"],
    "role": "Mentor"
  },
  {
    "id": 10,
    "name": "Evelyn Clark",
    "bio": "Evelyn Clark is a mentee diving deep into cloud computing and backend systems. She is focused on learning Node.js and Python to build scalable applications.",
    "image": "https://img.freepik.com/free-photo/cropped-portrait-young-handsome-boy-looking-camera-posing-isolated-green-background_155003-45249.jpg?t=st=1734808897~exp=1734812497~hmac=65707cf2f33a1970f00f75e0c05d409f80022b947d56f6ef5bd149f361dd5b29&w=1380",
    "email": "evelynclark10@example.com",
    "password": "hashedpassword10",
    "skills": ["Node.js", "Python"],
    "interests": ["Travel", "Mountain Climbing", "Reading"],
    "role": "Mentee"
  },
  {
    "id": 11,
    "name": "James King",
    "bio": "James King is a mentor with a wealth of experience in full-stack development. His expertise in React, Node.js, and Python allows him to guide mentees across various technologies.",
    "image": "https://img.freepik.com/free-photo/crazy-sports-man-funny-expression_1194-3344.jpg?t=st=1734808921~exp=1734812521~hmac=14b2d158403016fd9945fa60b5febd8f9694bcfc9ed5db50e501f4a075471c00&w=1060",
    "email": "jamesking11@example.com",
    "password": "hashedpassword11",
    "skills": ["React", "Node.js", "Python"],
    "interests": ["Bike Riding", "Reading", "Communication"],
    "role": "Mentor"
  },
  {
    "id": 12,
    "name": "Ava Scott",
    "bio": "Ava Scott is a mentee eager to learn about front-end technologies. She is currently focused on mastering JavaScript and Vue.js.",
    "image": "https://img.freepik.com/free-photo/young-attractive-teenager-man_144627-5757.jpg?t=st=1734808940~exp=1734812540~hmac=f39d5252409b6f7ce22b7ffb6838d17d4b45c57eb0797b468746d7f49a723b5e&w=740",
    "email": "avascott12@example.com",
    "password": "hashedpassword12",
    "skills": ["JavaScript", "Vue.js"],
    "interests": ["Cricket", "Travel", "Lawn Tennis"],
    "role": "Mentee"
  },
  {
    "id": 13,
    "name": "William Young",
    "bio": "William Young is a mentor specializing in backend systems. His knowledge of C++, Java, and Python enables him to support mentees in solving complex technical challenges.",
    "image": "https://img.freepik.com/free-photo/studio-portrait-adult-blond-caucasian-man-with-short-haircut-black-t-shirt-with-blue-eyes-staring-camera-grey-background_132075-8422.jpg?t=st=1734808960~exp=1734812560~hmac=5083b90a0014fa1bbe69c33df64ede6a97c43438baaad7aafadec84b0829df3e&w=740",
    "email": "williamyoung13@example.com",
    "password": "hashedpassword13",
    "skills": ["C++", "Java", "Python"],
    "interests": ["Mountain Climbing", "Reading", "Communication"],
    "role": "Mentor"
  },
  {
    "id": 14,
    "name": "Ella Hall",
    "bio": "Ella Hall is a mentee fascinated by full-stack development. She is dedicated to learning React and Python to enhance her web development skills.",
    "image": "https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg?t=st=1734808980~exp=1734812580~hmac=c244785dc82af15caa60d186e3ce3c27834a568d131947dab92ddd7401b8d68d&w=1380",
    "email": "ellahall14@example.com",
    "password": "hashedpassword14",
    "skills": ["React", "Python"],
    "interests": ["Swimming", "Travel", "Cricket"],
    "role": "Mentee"
  },
  {
    "id": 15,
    "name": "Henry White",
    "bio": "Henry White is a mentor with expertise in backend development. He is highly skilled in Node.js, C++, and JavaScript and is passionate about mentoring budding developers.",
    "image": "https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1734809000~exp=1734812600~hmac=6d0cf63e0aa0083e3cbedb942e3e6d911ce8ac45aaf9832b2f7e09ca22c14d2c&w=1380",
    "email": "henrywhite15@example.com",
    "password": "hashedpassword15",
    "skills": ["Node.js", "C++", "JavaScript"],
    "interests": ["Reading", "Lawn Tennis", "Travel"],
    "role": "Mentor"
  },
  {
    "id": 16,
    "name": "Chloe Adams",
    "bio": "Chloe Adams is a mentee focused on mastering full-stack technologies. She is diving into Angular and Python to become a versatile developer.",
    "image": "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1734809019~exp=1734812619~hmac=21e0437f2f0139fe244052ca9a7ce3b87cc25864de2035c66dc4bba7ff38fd86&w=1380",
    "email": "chloeadams16@example.com",
    "password": "hashedpassword16",
    "skills": ["Angular", "Python"],
    "interests": ["Bike Riding", "Communication", "Cricket"],
    "role": "Mentee"
  },
  {
    "id": 17,
    "name": "Jack Wright",
    "bio": "Jack Wright is a mentor with extensive experience in front-end and backend technologies. He is an expert in React, Node.js, and Java.",
    "image": "https://img.freepik.com/free-photo/front-view-man-with-apple-head_23-2148364924.jpg?t=st=1734809037~exp=1734812637~hmac=c0ed1f26c42a65c707e22698dfc4a459db1a623fbd38511b5ab384a70202a8d0&w=740",
    "email": "jackwright17@example.com",
    "password": "hashedpassword17",
    "skills": ["React", "Node.js", "Java"],
    "interests": ["Travel", "Mountain Climbing", "Communication"],
    "role": "Mentor"
  },
  {
    "id": 18,
    "name": "Amelia Turner",
    "bio": "Amelia Turner is a mentee exploring web development with Vue.js and JavaScript. She is committed to improving her skills and building dynamic applications.",
    "image": "https://img.freepik.com/free-photo/teenager-boy-portrait_23-2148105678.jpg?t=st=1734809056~exp=1734812656~hmac=243e804ca6ba9a4e1c82ecea3563f61897cfb672e152432deb961f2cf147eebf&w=740",
    "email": "ameliaturner18@example.com",
    "password": "hashedpassword18",
    "skills": ["Vue.js", "JavaScript"],
    "interests": ["Lawn Tennis", "Travel", "Cricket"],
    "role": "Mentee"
  },
  {
    "id": 19,
    "name": "Benjamin Harris",
    "bio": "Benjamin Harris is a mentor proficient in backend technologies. His expertise in C++, Python, and Node.js makes him an excellent guide for mentees.",
    "image": "https://img.freepik.com/free-photo/young-man-wearing-chain-necklace_23-2149490509.jpg?t=st=1734807262~exp=1734810862~hmac=866934cac667d60e68fd5863eb4d0f0aa89843effdf318b33e5c19d2fbb1ace6&w=740",
    "email": "benjaminharris19@example.com",
    "password": "hashedpassword19",
    "skills": ["C++", "Python", "Node.js"],
    "interests": ["Mountain Climbing", "Bike Riding", "Travel"],
    "role": "Mentor"
  }
]
module.exports = userData;