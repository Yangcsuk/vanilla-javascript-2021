const quotes = [
{
    quote : "우리는 모두 시궁창에 있지만, 몇몇은 별을 바라보고 있다.",
    author : "오스카, 와일드",
},
{
    quote : "잔인한 말이지만 위기는 누군가에게 기회가 된다. 변화에 적응하지 못하면 빠르게 도태될 것이고, 적응하면 더 큰 경제력과 사회적 영향력을 가질 것이다.",
    author : "신사임당",
},
{
    quote : "'끈기'는 '끊기'에서 시작된다. 지속가능한 환경을 설정하자",
    author : "신박사",
},
{
    quote : "프로의 세계는 '잘'해야 인정받는다. '열심히'는 기본이다.",
    author : "신사임당",
},
{
    quote : "내 친구를 냉정하게 보는만큼, 나 자신도 냉정하게 봐야한다.",
    author : "신박사",
},
{
    quote : "운을 잡지못하는 세가지 경우 1) 무엇이 중요한지 모른다. 2)시간 아까운 줄 모른다. 3) 1,2번을 반복한다.",
    author : "김작가",
},
{
    quote : "변화의 시작은 불편함이다.",
    author : "신사임당",
},
{
    quote : "기록은 기억을 압도한다. 기록한 곳을 기억하라.",
    author : "신박사",
},
{
    quote : "영감이 떠오르길 기다려선 안된다. 몽둥이를 들고 그걸 쫓아야 한다.",
    author : "잭,런던",
},
{
    quote : "읽을 책을 많이 사두고, 독서가 필요할 때 바로 읽을 수 있는 준비를 해두자. 책읽고 사람되자",
    author : "오종태 이사",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;