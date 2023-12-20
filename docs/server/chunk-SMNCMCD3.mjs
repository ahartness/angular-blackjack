import './polyfills.server.mjs';
import{A as M,B as I,C as v,D as R,E as T,H as k,N as w,a as l,b as S,c as _,d as D,e as d,f as b,g as o,h as f,i as p,j as c,k as s,l as x,m as g,n as h,o as m,p as y,q as H,r as C,y as F}from"./chunk-VMYMIPXR.mjs";var B=(()=>{let e=class e{constructor(){this.card="",this.cardUrl="assets/cards/{{card}}.png"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l({type:e,selectors:[["app-card"]],inputs:{card:"card"},standalone:!0,features:[C],decls:1,vars:1,consts:[[3,"src"]],template:function(a,n){a&1&&s(0,"img",0),a&2&&o("src","assets/cards/"+n.card+".png",D)},styles:["img[_ngcontent-%COMP%]{height:10rem}"]});let t=e;return t})();var u=class{reset(){this.userCards=[],this.dealerCards=[],this.userScore=0,this.dealerScore=0,this.availableCards=[...this.allCards]}constructor(){this.allCards=["2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C","5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D","8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","JC","JD","JH","JS","QC","QD","QH","QS","KC","KD","KH","KS","AC","AD","AH","AS"],this.gameActive=!1,this.userCards=[],this.dealerCards=[],this.userScore=0,this.dealerScore=0,this.availableCards=[],this.availableCards=[...this.allCards]}getRandomCard(e){let r=Math.floor(Math.random()*this.availableCards.length),i=this.availableCards[r];return this.availableCards.splice(r,1),console.log(this.availableCards.length+" cards left"),e==="user"?this.userCards.push(i):this.dealerCards.push(i),i}getCardScore(e){let r=e.slice(0,-1);return console.log("player card",this.userCards),r==="A"?11:r==="J"||r==="Q"||r==="K"?10:parseInt(r)}};function V(t,e){if(t&1){let r=x();p(0,"button",0),g("click",function(){S(r);let a=h();return _(a.dealCards())}),m(1,"Deal Cards"),c()}}function j(t,e){if(t&1&&s(0,"app-card",1),t&2){let r=e.$implicit;o("card",r)}}function N(t,e){if(t&1&&(p(0,"div",4)(1,"p"),m(2,"Dealer Cards"),c(),f(3,j,1,1,"app-card",5),s(4,"app-card",6),c()),t&2){let r=h();d(3),o("ngForOf",r.dealerCards)}}function U(t,e){if(t&1&&s(0,"app-card",1),t&2){let r=e.$implicit;o("card",r)}}function $(t,e){if(t&1&&(p(0,"div",4)(1,"p"),m(2,"Player Cards"),c(),f(3,U,1,1,"app-card",5),c()),t&2){let r=h();d(3),o("ngForOf",r.userCards)}}var E=(()=>{let e=class e{constructor(i){this.cardDataService=i,this.userCards=[],this.dealerCards=[],this.userScore=this.cardDataService.userScore,this.dealerScore=this.cardDataService.dealerScore,this.availableCards=this.cardDataService.availableCards}dealCards(){this.userCards=[],this.dealerCards=[],console.log(this.cardDataService.availableCards.length),this.cardDataService.availableCards.length>10?(this.userCards.push(this.cardDataService.getRandomCard("user")),this.dealerCards.push(this.cardDataService.getRandomCard("dealer")),this.userCards.push(this.cardDataService.getRandomCard("user")),console.log(this.cardDataService.getCardScore(this.userCards[0]))):(this.cardDataService.reset(),this.availableCards=this.cardDataService.availableCards,this.dealCards())}showRandomCard(){this.randomCard=this.cardDataService.getRandomCard("user")}};e.\u0275fac=function(a){return new(a||e)(b(u))},e.\u0275cmp=l({type:e,selectors:[["app-board"]],standalone:!0,features:[C],decls:8,vars:5,consts:[[3,"click"],[3,"card"],[3,"click",4,"ngIf"],["class","card-container",4,"ngIf"],[1,"card-container"],[3,"card",4,"ngFor","ngForOf"],["card","red_back"]],template:function(a,n){a&1&&(p(0,"button",0),g("click",function(){return n.showRandomCard()}),m(1,"Show Random Card"),c(),s(2,"app-card",1),p(3,"p"),m(4),c(),f(5,V,2,0,"button",2)(6,N,5,1,"div",3)(7,$,4,1,"div",3)),a&2&&(d(2),o("card",n.randomCard),d(2),y("",n.availableCards.length," Total Cards in Shoe"),d(1),o("ngIf",n.userScore==0),d(1),o("ngIf",n.dealerCards.length>0),d(1),o("ngIf",n.userCards.length>0))},dependencies:[B,v,M,I],styles:[".card-container[_ngcontent-%COMP%]{display:flex;align-items:center}"]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.title="angular-blackjack"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[H([u]),C],decls:1,vars:0,template:function(a,n){a&1&&s(0,"app-board")},dependencies:[v,E]});let t=e;return t})();var J=[];var K={providers:[w(J),T()]};var z={providers:[k()]},Q=F(K,z);var q=()=>R(O,Q),he=q;export{he as a};
