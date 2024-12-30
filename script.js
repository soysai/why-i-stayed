const tweetsContainer = document.getElementById('tweets-container');
let tweetArray = {
tweet: [
    {
        "Tweet": "Why didn’t I leave my abuser? Because he emotionally blackmailed me into staying. Because he made me aware of the power he had over me and that leaving was never an option. That if I left I will live to regret it. Dare to ask me again why couldn’t I leave? ",
        "Date ": "October 30, 2018",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "My body...my choice!!!",
        "Date ": "June 19, 2019",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "#WhyIStayed because I wanted my son to have a father. #WhyILeft because I wanted my son to have a mother. ",
        "Date ": "August 19, 2021",
        "WhyIStayed": "yes",
        "WhyILeft": "yes",
        "WhyIdidntleave": "no "
    },
    {
        "Tweet": "Because I was shit scared of him. 2 things; I’d die trying, or I’d loose the kids and I’d take my own life. The only way to protect my babies from him, was to be with him. Believe her. Always, believe her.",
        "Date ": "Dec 23, 2020",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "He told me I wasn’t responsible enough with money so he spent it “better” on himself. I couldn’t drive so he stole my car. Every time I tried to break up with him was a fight I lost. Every time I cried for help I was stupid because I should’ve left a long time ago.",
        "Date ": "August 11, 2019",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "It takes years for many victims of abuse to come to terms with the fact that they were abused so stop it with the victim blaming. Don’t ask me #WhyIStayed!",
        "Date ": "May 27, 2022",
        "WhyIStayed": "yes",
        "WhyILeft": "no ",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "I had no money a 3 month old baby and he controlled money I was scared my baby would go hungry",
        "Date ": "December 22, 2020",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "It's not just women who stay — 4 myths I told myself about my ex-wife. 1) She's had a tough life, she's doing her best. 2) It's not her fault she hit me, I was being a dick, 3) If I was a proper man, she'd be happier 4) If her life was easier, she'd be less stressed.",
        "Date ": "April 30, 2020",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Today we wore purple as our team color today for domestic violence awareness! There are 1,000 of men and women who suffer in silence every day",
        "Date ": "October 19, 2023",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Because I was so ill after years of abuse that I believed I could never be strong enough to leave. He told me for years that I was useless and I believed him. I was also worried he would harm my son or would try to take him from me",
        "Date ": "October 11, 2019",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "A frequent question survivors of domestic violence get asked is, “Why did you stay with your abuser, why didn’t you just leave?” There are MANY reasons why individuals \"don't leave\".   Let's stop asking this tired question and instead ask how can I help?  #WhyIStayed",
        "Date ": "June 13, 2018",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Went to therapy after getting out of an abusive relationship. I knew it was bad but I didn’t understand it was DV. The day my therapist introduced the power and control wheel, #whyistayed & #whyileft was trending. I saw my story in others stories and it finally clicked.",
        "Date ": "September 19, 2021",
        "WhyIStayed": "yes",
        "WhyILeft": "yes",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "It CAN & DOES happen to anyone. Most of the time no one even realises. Unfortunately we are stigmatised, made to feel like we are at fault, or worse, silenced. More voices are needed and we must bring this out into the open.",
        "Date ": "April 6 2021",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Instead, sit BESIDE them. Listen to what is keeping them there. Support and love them even though it may be hard to watch them stay. Help them if there is a way you can. But shaming an abused person is not",
        "Date ": "August 23, 2021",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Every time I see a woman shamed on here for dating “xyz kinda man” I note that manipulation, abuse, and mistreatment are not limited to certain career fields. We shouldn’t shame women for having loved & lost. Nor for #WhyIStayed— the real work is in supporting folx to move on.",
        "Date ": "December 23 2020",
        "WhyIStayed": "yes",
        "WhyILeft": "no",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Pastors, we have to work to repent of this narrative. Encouraging a person to stay in an abusive relationship because of your beliefs about divorce is, plainly put, evil. #whyistayed",
        "Date ": "March 5, 2019",
        "WhyIStayed": "yes",
        "WhyILeft": "no ",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "Tell your friend you're worried about them — but WITHOUT judgment!",
        "Date ": "July 20, 2018",
        "WhyIStayed": "yes",
        "WhyILeft": "no ",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "A few years ago #whyistayed trended. It was profound, what many women shared. Fear, poverty, children, shame. When a woman is abused it is never her fault. We need to stop shaming amd start supporting.",
        "Date ": "February 18, 2021",
        "WhyIStayed": "yes",
        "WhyILeft": "no ",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "- you don’t deserve to be frightened when you see a phone message from your ex - YOU DO NOT DESERVE TO HAVE YOUR WHOLE LIFE MEASURED AGAINST MAKING THIS MAN HAPPY OR MAD You will find way more love on the other side of that wall.",
        "Date ": "July 28,2020",
        "WhyIStayed": "yes",
        "WhyILeft": "yes",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "It is harder than one expects to end the cycle of abuse.",
        "Date ": "April 7, 2018",
        "WhyIStayed": "yes",
        "WhyILeft": "yes",
        "WhyIdidntleave": "no"
    },
    {
        "Tweet": "he was older than me and convinced me that a.) he’d kill himself and b.) nobody would ever want a “used girl” like me after what he took from me.",
        "Date ": "April 1 2021",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "I did leave. I packed a bag full of as much stuff as I could and I went to my parents. They told me I was getting in the way and I should go back and make it work.",
        "Date ": "April 1, 2021",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "The question should really be to the abuser: Why are you holding someone hostage? People say, 'Oh it can't have been that bad, else she would have left.' And it's like no, it's because it was that bad, I couldn't leave.\"",
        "Date ": "February 21, 2021",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "Thats exactly the it! Narcissistic abuse needs to have a light shined on it! This abuse is why victims dont just leave. Educating society is essential. Lets also remember Reeva Steenkamp.",
        "Date ": "December 21, 2018",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "The only option I had left was a women’s shelter and that is where I would have gone with my baby son to escape the abuse. When luckily he left. After a whole year of telling him it was over and he needed to go.",
        "Date ": "April 1, 2021",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "I never thought of it as abuse. It was normal.",
        "Date ": "October 22, 2023",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    },
    {
        "Tweet": "people ask why #domesticviolence victims don't \"just leave him\" #WhyIDidntLeave” question should be: \"why is he violent?",
        "Date ": "April 16, 2014",
        "WhyIStayed": "no",
        "WhyILeft": "no",
        "WhyIdidntleave": "yes"
    }
]};



// To create and display tweets
function displayTweets() {
    const alltweets = tweetArray.tweet;

    alltweets.forEach((tweet, index) => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.textContent = tweet.Tweet;
        // document.body.appendChild(tweetElement);
        document.getElementById("tweets-container").appendChild(tweetElement);
        tweetElement.style.visibility = 'hidden';

        setTimeout(() => {
            tweetElement.style.position = 'absolute';
            // this part is troubleshooted through ChatGPT
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const leftPosition = Math.random() * (windowWidth - tweetElement.offsetWidth);
            const topPosition = Math.random() * (windowHeight - tweetElement.offsetHeight);
            tweetElement.style.left = leftPosition + 'px';
            tweetElement.style.top = topPosition + 'px';
            tweetElement.style.visibility = 'visible';
        }, index * 1000); 
    });


}

window.onload = displayTweets;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("static");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}