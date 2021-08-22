const quotes = [
    {
        quote: "이 무색무취 도시가 나를 잡아먹는다. -김의창-"
    },

    {
        quote: "10년 후, 민주영주, 성공적 -김영주-"
    },

    {
        quote: "비효율. -어느 사주가-"
    },

    {
        quote: "이태민, 박서준, 김수현, 조정석 -이태민-"
    },

    {
        quote: "마블 퓨처 파이트.  -김병문-"
    },

    {
        quote: "인생은 당해봐야 아는게야. -김영주-"
    },

    {
        quote: "동네 바보에게도 배울 점은 있다. -김의창-"
    },

    {
        quote: "나는 심장이 벌렁벌렁 거리는 일을 좋아한다네.  -이태민-"
    },

    {
        quote: "육해공익 , 드림보이즈 ."
    },


    
]

const quote = document.querySelector("#quote span:first-child");




const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;




