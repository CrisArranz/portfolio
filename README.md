This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Portfolio App

You can see the result in de following url: [https://cristian-arranz-portfolio.com](https://cristian-arranz-portfolio.herokuapp.com)

## Components

We divide the app with the following separation of components:
  - Sections
  - Utils
  
### Sections
In this part of the code we separate the information in part, we will separate in the following parts:

#### *About me*
In this section explain topics about myself. 

#### *Service Offer*
In this section explain the tools and skills about myself.
Here we will use the **Card** component that we implement in Utils components part.

#### *Projects*
In this section explain the projects that I develop in the diferents languages that I have used. Here we use the **ImageCard** component that we implement in Utils components part.

### Utils
In this part we have created the common components that we have detected for one possible reused. The components are the following:

#### *Card*
This components show a card with the information that we send.

The component has the following props:
  - **images**: url or path the image that will we loaded
  - **title**: main message of the card
  - **description**: information that explain the card
  - **titleTools**: title of the tools in the element
  - **tools**: list of tools that we have

#### *ImageCard*
This component show a card with and image like main element.

The component has the following props:
  - **url**: here we will have two elements:
    - **image**: url with the image of the project
    - **project**: url to access to the project
  - **title**: main message of the image card
  - **description**: little explication about the project

#### *Navbar*
This component show a navigation in the header part of the page.

The component has the following props:
  - **developer**: the nickname of the developer to show
  - **url**: url that we put in the nav section
  - **handleClick**: function to handle the click in one site of the component

In this component we will use **Button** component that we develop in this part.

#### *Button*
This component its a custom button that we have created.

The component has the following props:
  - **url**: url that have the document that we will need to download
  - **message**: message that we put in the button
  - **className**: classes that we will put in the button