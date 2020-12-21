const students = [
    {   
        "name" : "Madhurendra Kumar",
        "bloodGroup": "B +ve",
        "email": "kmadhu1311@gmail.com",
        "city": "Sitamarhi",
        "imageLink": "https://avatars0.githubusercontent.com/u/62008327?s=400&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Arjun K Prasad",
        "bloodGroup": "O+ve",
        "email": "arjun1237.kp@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars1.githubusercontent.com/u/18505592?s=460&u=114f93be5cd15791beb321809c6b4c07b13a6bcd&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Akash Pathak",
        "bloodGroup": "AB +ve",
        "email": "pathakvikash9211@gmail.com",
        "city": "Patna",
        "imageLink": "https://avatars2.githubusercontent.com/u/48826118?s=460&u=6f6e352df061c14f8b816d494c753ced441152da&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Omkarnath Parida",
        "bloodGroup": "O+ve",
        "email": "pomkarnath98@gmail.com",
        "city": "Bhubaneswar",
        "imageLink": "https://avatars0.githubusercontent.com/u/42507069?s=400&u=42b48fbee6c1c8551ba591596bd3ad9570ce3f53&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Revanth Raghu",
        "bloodGroup": "Z",
        "email": "revabob@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars2.githubusercontent.com/u/62105505?s=460&u=4999a641e27cbb592b402d65f587712234d941d8&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Manish Kumar",
        "bloodGroup": "B+ve",
        "email": "manish1771999@gmail.com",
        "city": "Durgapur",
        "imageLink": "https://avatars0.githubusercontent.com/u/37025125?s=460&u=683d2c67fdd1ca67fe56c46ad92f1ad1abf93a19&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Misaal Ambasta",
        "bloodGroup": "O+ve",
        "email": "misaalambasta@gmail.com",
        "city": "Kolkata",
        "imageLink": "https://avatars1.githubusercontent.com/u/57540242?s=460&u=dbf44927e8062685000ef99c25e85d27c7df737c&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Alok Kothiyal",
        "bloodGroup": "B+",
        "email": "alokothiyal007@gmail.com",
        "city": "Dehradun",
        "imageLink": "https://avatars3.githubusercontent.com/u/23238432?s=400&u=0a0ef33f8323529c71a9677a747d392c01448e96&v=4",
        "gender": "Male"
    },
    {   
        "name" : "Sai Nihal",
        "bloodGroup": "O+ve",
        "email": "sainihal13@gmail.com",
        "city": "Hyderabad",
        "imageLink": "https://ca.slack-edge.com/T011D7XGDBR-U012A7U1B89-40b149099eff-512",
        "gender": "Male"
    },
    {
        "name" : "Soumitha BHaskara",
        "bloodGroup": "O+ve",
        "email": "soumithaalpineti@gmail.com",
        "city": "Chittoor",
        "imageLink": "https://avatars0.githubusercontent.com/u/63995606?s=460&u=cdf8ad7bb14e8efd51074a211a4d44efd84c7f14&v=4",
        "gender": "Female"
    },
    {
        "name" : "Aayushi Shah",
        "bloodGroup": "O +ve",
        "email": "aayu.shah711@gmail.com",
        "city": "Mumbai",
        "imageLink": "https://avatars0.githubusercontent.com/u/47210224?s=460&u=f878de944246996cf5b8d85bf82e93c224ecc657&v=4",
        "gender": "Female"
    },
    {
        "name" : "Kritika Tripathi",
        "bloodGroup": "O +ve",
        "email": "kritikaktripathi@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars2.githubusercontent.com/u/58283457?s=460&u=06b6bf62d0b81e6afeace8983b5da066546c4e5e&v=4",
        "gender": "Female"
    },
    {
        "name" : "Shubham Kumar",
        "bloodGroup": "A +ve",
        "email": "shubhamkumar.aceit@gmail.com",
        "city": "Patna",
        "imageLink": "https://avatars3.githubusercontent.com/u/63995613?s=460&u=7544107dac3e80424b62d4380a37977a9b42154a&v=4",
        "gender": "Male"
    },
    {
        "name" : "Soundarya M",
        "bloodGroup": "B+ve",
        "email": "soundaryamecse@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars1.githubusercontent.com/u/63995229?s=400&u=2e201ce628206e5c15458e09f24d8358995206d8&v=4",
        "gender": "Female"
    },
    {
        "name" : "Sheelu Krishnatrayi",
        "bloodGroup": "O - ve",
        "email": "sheelukumari27@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars2.githubusercontent.com/u/63995282?s=400&u=9f0b62e75bbd56a6c13841a1381502fa82dc65df&v=4",
        "gender": "Female"
    },
    {
        "name" : "Shreyas S",
        "bloodGroup": "AB +ve",
        "email": "shreyshriyan@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars2.githubusercontent.com/u/51715896?s=460&u=f8cfb818c96fa9b363219f5198e5299d9f078a7c&v=4",
        "gender": "Male"
    },
    {
        "name" : "kavya chowdary",
        "bloodGroup": "B +ve",
        "email": "malimpatikavya@gmail.com",
        "city": "Hyderabad",
        "imageLink": "https://avatars1.githubusercontent.com/u/60057137?s=460&u=f1567c532a56926a3f7ae33af8f9d9c64fc3089c&v=4",
        "gender": "Female"
    },
    {
        "name" : "Ashish Raj",
        "bloodGroup": "A+",
        "email": "mr.ashishrajyadav@gmail.com",
        "city": "Bhopal",
        "imageLink": "https://avatars2.githubusercontent.com/u/63995305?s=460&u=638d6e5d9a3f6e5ff5dcdb5fc6bdbced576f246d&v=4",
        "gender": "Male"
    },
    {
        "name" : "Manideep",
        "bloodGroup": "O+ve",
        "email": "pmanideepnaidu@gmail.com",
        "city": "Hyderabad",
        "imageLink": "https://avatars0.githubusercontent.com/u/43706578?s=400&u=2736418f4498ceebf8bfec15f010c1db3db4d128&v=4",
        "gender": "Male"
    },
    {
        "name" : "Rajeswari",
        "bloodGroup": "O+ve",
        "email": "rajilechrame@gmail.com",
        "city": "Bangalore",
        "imageLink": "https://avatars0.githubusercontent.com/u/52443647?v=4",
        "gender": "Female"
    },
    {
        "name" : "Richa Singh",
        "bloodGroup": "O+ve",
        "email": "singhricha0724@gmail.com",
        "city": "Noida",
        "imageLink": "https://avatars2.githubusercontent.com/u/63995194?s=400&u=93782af14165bf978411f96d4e831d6c523c32cb&v=4",
        "gender": "Female"
    },
    {
        "name" : "Vinay Gupta",
        "bloodGroup": "B+ve",
        "email": "vinaytest75@gmail.com",
        "city": "Delhi",
        "imageLink": "https://avatars2.githubusercontent.com/u/62155169?s=460&u=7447c7b4463e4ffbfa476c0e44c6e53c2a30f5dc&v=4",
        "gender": "Male"
    },
    {
        "name" : "Falak",
        "bloodGroup": "A+ve",
        "email": "falakthackar@gmail.com",
        "city": "Pune",
        "imageLink": "https://avatars1.githubusercontent.com/u/55325347?s=460&u=42c4ac2def4bf8b879f14b32c235522c7e925299&v=4",
        "gender": "Female"
    },
    {
        "name" : "Aravindan",
        "bloodGroup": "O+ve",
        "email": "aravind.sakthi@outlook.com",
        "city": "Chennai",
        "imageLink": "https://avatars0.githubusercontent.com/u/59511858?s=400&u=f07a5a64870cbd95f11ab4354dfb413e7a015899&v=4",
        "gender": "Male"
    },
    {
        "name" : "Keshav Mahawar",
        "bloodGroup": "B-ve",
        "email": "kes.mahawar@gmail.com",
        "city": "Alwar",
        "imageLink": "https://avatars1.githubusercontent.com/u/28633312?s=460&u=188f790c1d9ff8bf94b595b43df0dea1d74fe13a&v=4",
        "gender": "Male"
    },
    {
        "name" : "Gouthami Kyatham",
        "bloodGroup": "B +ve",
        "email": "gouthamikyatham4@gmail.com",
        "city": "Karimnagar",
        "imageLink": "https://avatars1.githubusercontent.com/u/63995584?s=460&u=85a88e60b6a23bdb34b0ba4f9381370c8a1ef503&v=4",
        "gender": "Female"
    },
    {
        "name" : "Lakshmi Korukanti",
        "bloodGroup": "0+ve",
        "email": "luckyrao4e8@gmail.com",
        "city": "Karimnagar",
        "imageLink": "https://avatars0.githubusercontent.com/u/63996385?s=460&u=9a027f97ef133b58152e9c2e5ba53181951bd611&v=4",
        "gender": "Female"
    },
    {
        "name" : "Gargi Das",
        "bloodGroup": "O -ve",
        "email": "dasgargi100@gmail.com",
        "city": "Kolkata",
        "imageLink": "https://avatars3.githubusercontent.com/u/53333842?s=400&u=cf53ae8dee4428caa89a90159bc74e2d11758137&v=4",
        "gender": "Female"
    },
    {
        "name" : "Ritesh Ranjan",
        "bloodGroup": "B +ve",
        "email": "riteshranjan1997@gmail.com",
        "city": "Ranchi",
        "imageLink": "https://avatars3.githubusercontent.com/u/51942843?s=460&u=b2b37dee9e1950a116a5fbe0092da215ce64cdf0&v=4",
        "gender": "Male"
    },
    {
        "name" : "Suhail Malik",
        "bloodGroup": "AB +ve",
        "email": "devmsuhail@gmail.com",
        "city": "Moradabad",
        "imageLink": "https://avatars0.githubusercontent.com/u/40052045?s=460&u=540654cceeb2bd151c14a1a77fc3dee443eba279&v=4",
        "gender": "Male"
    }
]

module.exports = students