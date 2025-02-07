"use strict";(self.webpackChunkaws_study=self.webpackChunkaws_study||[]).push([[2671],{4532:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"containers/ecs","title":"\ud83d\udea2 Amazon ECS (Elastic Container Service)","description":"O Amazon ECS \xe9 um servi\xe7o gerenciado de containers para rodar aplica\xe7\xf5es Docker na AWS.","source":"@site/docs/containers/ecs.md","sourceDirName":"containers","slug":"/containers/ecs","permalink":"/aws-study/docs/containers/ecs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc33 Docker","permalink":"/aws-study/docs/containers/docker"},"next":{"title":"\u2638\ufe0f Amazon EKS (Elastic Kubernetes Service)","permalink":"/aws-study/docs/containers/eks"}}');var o=s(4848),a=s(8453);const i={sidebar_position:4},t="\ud83d\udea2 Amazon ECS (Elastic Container Service)",c={},d=[{value:"\ud83d\udd39 Modos de Execu\xe7\xe3o",id:"-modos-de-execu\xe7\xe3o",level:2},{value:"\ud83d\udd39 Componentes do ECS",id:"-componentes-do-ecs",level:2},{value:"\ud83d\udd39 Quando Usar ECS?",id:"-quando-usar-ecs",level:2},{value:"\ud83d\udcdd Poss\xedveis Quest\xf5es na Prova",id:"-poss\xedveis-quest\xf5es-na-prova",level:2}];function u(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-amazon-ecs-elastic-container-service",children:"\ud83d\udea2 Amazon ECS (Elastic Container Service)"})}),"\n",(0,o.jsxs)(n.p,{children:["O ",(0,o.jsx)(n.strong,{children:"Amazon ECS"})," \xe9 um servi\xe7o gerenciado de containers para rodar aplica\xe7\xf5es Docker na AWS."]}),"\n",(0,o.jsx)(n.h2,{id:"-modos-de-execu\xe7\xe3o",children:"\ud83d\udd39 Modos de Execu\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\udd38 ",(0,o.jsx)(n.strong,{children:"Fargate"})," \u2013 Sem necessidade de gerenciar servidores.",(0,o.jsx)(n.br,{}),"\n","\ud83d\udd38 ",(0,o.jsx)(n.strong,{children:"EC2"})," \u2013 Containers rodando em inst\xe2ncias EC2 gerenciadas manualmente."]}),"\n",(0,o.jsx)(n.h2,{id:"-componentes-do-ecs",children:"\ud83d\udd39 Componentes do ECS"}),"\n",(0,o.jsxs)(n.p,{children:["\u2705 ",(0,o.jsx)(n.strong,{children:"Cluster"})," \u2013 Conjunto de inst\xe2ncias EC2 ou Fargate.",(0,o.jsx)(n.br,{}),"\n","\u2705 ",(0,o.jsx)(n.strong,{children:"Task Definition"})," \u2013 Blueprint que define quais containers rodar.",(0,o.jsx)(n.br,{}),"\n","\u2705 ",(0,o.jsx)(n.strong,{children:"Task"})," \u2013 Uma inst\xe2ncia em execu\xe7\xe3o da Task Definition.",(0,o.jsx)(n.br,{}),"\n","\u2705 ",(0,o.jsx)(n.strong,{children:"Service"})," \u2013 Garante que um n\xfamero espec\xedfico de tasks fique rodando."]}),"\n",(0,o.jsx)(n.h2,{id:"-quando-usar-ecs",children:"\ud83d\udd39 Quando Usar ECS?"}),"\n",(0,o.jsxs)(n.p,{children:["\u2705 Quando deseja usar ",(0,o.jsx)(n.strong,{children:"Fargate"})," para evitar gerenciar infraestrutura.",(0,o.jsx)(n.br,{}),"\n","\u2705 Quando j\xe1 usa EC2 e quer um ",(0,o.jsx)(n.strong,{children:"servi\xe7o nativo da AWS"})," para containers."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"-poss\xedveis-quest\xf5es-na-prova",children:"\ud83d\udcdd Poss\xedveis Quest\xf5es na Prova"}),"\n",(0,o.jsxs)(n.p,{children:["\u2705 ",(0,o.jsx)(n.strong,{children:"O que \xe9 o ECS?"}),(0,o.jsx)(n.br,{}),"\n","\ud83d\udc49 ",(0,o.jsx)(n.strong,{children:"\xc9 o servi\xe7o gerenciado de containers da AWS."})]}),"\n",(0,o.jsxs)(n.p,{children:["\u2705 ",(0,o.jsx)(n.strong,{children:"Qual a diferen\xe7a entre Fargate e EC2 no ECS?"}),(0,o.jsx)(n.br,{}),"\n","\ud83d\udc49 ",(0,o.jsx)(n.strong,{children:"Fargate n\xe3o precisa de servidores, EC2 sim."})]}),"\n",(0,o.jsxs)(n.p,{children:["\u2705 ",(0,o.jsx)(n.strong,{children:"O que \xe9 uma Task Definition?"}),(0,o.jsx)(n.br,{}),"\n","\ud83d\udc49 ",(0,o.jsx)(n.strong,{children:"\xc9 um blueprint que define quais containers ser\xe3o executados."})]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);