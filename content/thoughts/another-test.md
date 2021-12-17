---
title: Another test
author: Son Thanh Vo
date: 2021-12-12
tags: frontend, javascript, framework
categories: mindset
excerpt: this is the excerpt
---

Lorem ipsum sunt est dolore ex dolore mollit nulla cupidatat laboris deserunt eiusmod veniam quis anim dolor eu ad amet ex dolor elit cillum duis in cillum commodo est duis culpa velit dolor do cupidatat ad dolor voluptate veniam labore ut in laborum voluptate anim in laborum laboris reprehenderit ut labore quis minim dolore tempor in adipisicing ullamco aliqua qui incididunt sunt ut ex

    interface Context {
      readonly id: string;
      readonly open: boolean;
      readonly onClick: (event: MouseEvent) => void;
    }

    export AccordionContext = createContext(Context | null)(null);

    export function useAccordion(): Context {
      const context = useContext(AccordionContext);

      if (context === null) {
        throw new Error ('Component must be wrapped by an Accordion Provider');
      }

      return context;
    }

Lorem ipsum laborum sed enim elit sint id eiusmod eiusmod commodo aute est aliqua tempor deserunt mollit reprehenderit ut voluptate do exercitation nostrud reprehenderit ut sint enim aliqua nisi non ad sit et esse ut culpa consequat qui id mollit mollit esse in anim proident dolor sit sint enim ad sit est velit laborum sit amet laborum magna dolor in sit excepteur laboris do

![Test written on a keyboard key](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F3016%2F1*srSO6S7Q0N-Y9iOwdVah0A.jpeg&f=1&nofb=1)

Lorem ipsum reprehenderit in mollit esse velit dolor consequat duis excepteur reprehenderit ea amet esse tempor occaecat ut est aute ut ut tempor amet do ad sunt in dolore sunt in magna velit labore ut amet ut in dolore excepteur dolore officia cillum laborum id do irure sint fugiat ut dolore adipisicing magna elit ad consectetur dolor velit officia ut excepteur eiusmod laborum voluptate

aute amet excepteur amet ut ex eu ad id in aliquip ex sint reprehenderit officia ad et eu mollit ut sed est consectetur minim proident quis fugiat nisi est non ex tempor dolore quis enim est aute cupidatat commodo veniam ut cillum eiusmod nisi ut labore sunt ea sint excepteur sit dolor cupidatat aute qui do culpa qui qui ut tempor id sed enim
