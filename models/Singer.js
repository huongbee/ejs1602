class Singer{
    constructor(id,name,avatar,link){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.link = link
    }
}
let domainImg = "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/";
let domain = "https://zingmp3.vn/nghe-si/";

let arrSinger = [
    new Singer(1,'Thanh Hưng','c/7/2/5/c7251165037599f02bbcee8550b37c16.jpg','Thanh-Hung-Idol'),
    new Singer(2,'Hương Tràm','b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg','Huong-Tram'),
    new Singer(3,'Sơn Tùng M-TP','e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg','Son-Tung-M-TP'),
    new Singer(4,'Mr Siro', 'e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg','Mr-Siro')
];

module.exports = {Singer, arrSinger, domain, domainImg}