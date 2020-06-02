Project 2 Pitch:

- **App Title**: CRENVU

- **App Description**: My app will be an interactive list that details the various endangered animal species, their locations country-wise, and how vulnerable they are. My app components will include descriptions and images of these endangered animals and how to assist the conservation effort.

- **Wireframe**:  

Desktop wireframe: https://wireframe.cc/pro/pp/d498365a1347883

Mobile wireframe: https://wireframe.cc/pro/edit/347905

- **API**: https://apiv3.iucnredlist.org/api/V3/docs

- **API Snippet**: {
  {
"count": 1089,
"country": "AZ",
"result": [
{
"taxonid": 42293,
"scientific_name": "Abies nordmanniana",
"subspecies": null,
"rank": null,
"subpopulation": null,
"category": "LC"
},

- **Component Hierarchy**: 

src
|__ assets/
      |__ graphics
      |__ images
      |__ fonts
|__ components/
      |__ Header.js
      |__ ShowPage.js
      |__ Footer.js
      |__ Nav.js
      |__ Region.js
      |__ Header.css
      |__ ShowPage.css
      |__ App.css
      |__ Region.css
      |__ Footer.css

- **Component Indication**

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | Functional |   N   |   N   | _The header will contain the navigation and logo._               |
|  Navigation  | Functional |   N   |   N   | _The navigation will provide a link to each of the pages._       |
|    Footer    | Functional |   N   |   N   | _The footer will provide personal info and social media links._  |
|   ShowPage   | Functional |   Y   |   Y   | _The showpage will display information retrieved by the API._    |
|    Region    | Functional |   Y   |   Y   | _The region will display endangered species' regions from API._  |

- **MVP**:

For my show page, I will have an interactive circle infograph that users will be able to access information regarding the vulnerable, endangered, and critically endangered animal species. In addition, my region page will also have an interactive map showcasing regions with various degrees of endangered species.


- **Post-MVP**: 

For the Post-MVP, I will be adding a conservation effort page component that will involve groups and organizations that are dedicated to helping and preserving endangered species. Ideally, it will also provide resources for users to contribute to the effort in their own way. I also will want to add an "extinct" list detailing the most recent extinctions and various famed extinctions of the past 1,000 years (e.g. Dodo Bird).


- **SWOT Analysis**:

My strengths lie in using interactive JS functions to provide easy-to-digest contect for users. My weaknesses will definitely fall in between culminating my project to get everything to function in unison. This includes debugging and polishing up my syntax so everything actually runs. I see this as an opportunity for me to simultaneously strengthen my portfolio and my work on something that I personally care about. I also see threats in time mismanagement. I either get carried away working too much to the point where I'm stumped for hours, or I spend too much time putting off coding in favor of less important features of the application. I also need to prioritize what I want done versus what I can actually do. 
