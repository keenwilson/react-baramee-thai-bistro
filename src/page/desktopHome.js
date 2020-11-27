import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Thumbnail from '../components/thumbnail'
import DesktopNews from './desktopNews'
import DesktopAnnouncement from './desktopAnnouncement'

class DesktopHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="intro-gallery">
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/lL6qo8n.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Wall Painting"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/xLYTGIll.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Northeastern Thai"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/tcq3R5b.jpg"
            imageAlt="Best Pad Ka Prao Thai Basil in Kansas City - "
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/GlDceSo.jpg"
            imageAlt="Seating Indoor"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/agdjyz3.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Baramee Thai Platters"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/BWmpC9C.jpg"
            imageAlt="Best Pad Thai in Kansas City - "
            isPortrait={true}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/IoLSNAyl.jpg"
            imageAlt="Kitchen Crew"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/Mzge3sL.jpg"
            imageAlt="Seating Outdoor: Red Umbrella"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/WJJpeg4.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Red Curries"
            isPortrait={false}
          />

          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/qw2szPHl.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Satey"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/WL2blEul.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Interior"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/lGZgLXfl.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Sticky Rice Mango"
            isPortrait={false}
          />
        </div>
        <DesktopAnnouncement />
        <div className="desktop-narrative">
          <h1 className="underline-60">Baramee Thai Bistro</h1>
          <p>
            Since opening in January 2019 ‘Baramee’ - meaning fulfilling
            yourself by making others happy in ‘Thai’ language, a Thai native
            and chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug
            Hoffman, offers a taste of Northeastern Thai dishes and from-the-wok
            Thai-style cooking with the freshest produce from the City Market
            and locally grown ingredients alongside vegetarian options in the
            Kansas City's Crossroads Arts district.
          </p>
          <div className="flex-wrapper">
            <div className="flex-row">
              <div className="flex-col">
                <Button size="large">
                  <Link to="/menu/lunch" className="heading-title underline-60">
                    Our Lunch Menu
                  </Link>
                </Button>
              </div>
              <div className="flex-col">
                <Button size="large">
                  <Link
                    to="/menu/dinner"
                    className="heading-title underline-60"
                  >
                    Our Dinner Menu
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-about-chef">
          <div className="flex-row-about-chef">
            <div className="flex-col">
              <img
                className="chef-picture"
                src="https://i.imgur.com/wGBMQgN.jpg"
                alt="Chef Nutnisa Hoffman"
              ></img>
            </div>
            <div className="flex-col">
              <p className="chef-quote">
                “I want to share our Thai food, share our Thai culture, meet new
                people, and be proud to represent Thai food in America.”
              </p>
              <br />
              <p className="chef-title">
                <span className="chef-name">Nutnisa Hoffman</span>, the owner of
                Mali Thai Bistro in Lee’s Summit and Baramee Thai Bistro in the
                Crossroads
              </p>
            </div>
          </div>
        </div>
        <div className="desktop-in-the-news">
          <h1 className="underline-60">In the News</h1>
          <div className="news-list ">
            <div className="news-card">
              <DesktopNews
                logoPath="https://i.imgur.com/dqWFlFQ.png"
                urlPath="http://bit.ly/39bkfmi"
                title="At Baramee Thai Bistro, Chef Nutnisa Hoffman Satisfies Cravings for Thai Comfort Foods"
                press="Feast Magazine"
                author="April Fleming"
                date="Jan 31, 2020"
                introduction="Although her family owned a restaurant in Bangkok, where she worked until she went to college, Nutnisa Hoffman never intended to join the business. But after emigrating from Thailand and eventually settling into life in Kansas City with her husband, Doug, she found that she missed Thai food and enjoyed cooking it, as it reminded her of family and her home country. Spurred on by that passion, the Hoffmans opened Mali Thai Bisto in Lee’s Summit, Missouri, in 2015 and Baramee Thai Bistro in the Crossroads a few years later. This coming spring, the couple plans to open their third restaurant in City Market, where they will serve more of the Thai comfort foods that Kansas City residents have come to crave."
                featurePicturePath="https://i.imgur.com/iEa53uk.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/3r5URxY.png"
                urlPath="https://www.inkansascity.com/eat-drink/news/baramee-thai-bistro-is-spicing-up-the-crossroads/"
                title="Three Chefs Bring Their Native Country’s Cuisine to KC"
                press="In Kansas City"
                author="Kelsey Cipolla"
                date="Oct 7, 2019"
                introduction="Every meal tells a story. For these three women, the dishes they prepare for Kansas City at their restaurants tell stories of their childhoods, cultures, and careers. Cooking Thai food is a way to build community for Nutnisa Hoffman, the owner of Mali Thai Bistro in Lee’s Summit and Baramee Thai Bistro in the Crossroads.Staying true to Thai flavors was important for Hoffman, who comes from a region where spice is key. Although the menu includes an assortment of curries and stir-fried dishes, the Thai noodle soup, made with rice noodles and veggies in a savory broth, is among her favorites."
                featurePicturePath="https://www.inkansascity.com/wp-content/uploads/2019/09/cuisine_feature-680x400.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/gC7maYt.jpg"
                urlPath="https://www.inkansascity.com/eat-drink/news/baramee-thai-bistro-is-spicing-up-the-crossroads/"
                title="The Crossroads: 7 of our favorite restaurants"
                press="435 Kansas City's Magazine"
                author="Natalie Gallagher"
                date="May 31, 2019"
                introduction="If you’re looking for a cure — to your cold, allergies, hangover or ennui — go for the tom kha soup ($6.95–$18.95) at Baramee Thai Bistro. When you taste the coconut broth infused with lemongrass, kaffir leaves, fresh chili and galangal (a citrusy root similar to ginger), you are tasting joy. And the flavor explosion doesn’t stop there. This menu is packed with plenty of the Thai classics you’re used to (plus a few that might surprise you), and we’re happy to report that, should you be craving a spicy seafood pad Thai ($18.95) with a side of crispy spring rolls ($6.95), Baramee will satisfy."
                featurePicturePath="https://i.imgur.com/F0wW86F.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/dqWFlFQ.png"
                urlPath="http://bit.ly/2NNbDtb"
                title="Baramee Thai Bistro Brings Northeastern Thai Cuisine to the
      Crossroads"
                press="Feast Magazine"
                author="April Fleming"
                date="Mar 13, 2019"
                introduction="Tucked in at the corner of 18th and Baltimore Streets, Douglas and
      Nutnisa Hoffman’s new restaurant, Baramee Thai Bistro, has been
      earning steady accolades since it opened in late January. It’s
      easy to understand why: from its high-level service and serene
      environment, to of course, the food, Baramee has a lot to offer
      its customers."
                featurePicturePath="https://i.imgur.com/xLYTGIl.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/3r5URxY.png"
                urlPath="https://www.inkansascity.com/eat-drink/news/baramee-thai-bistro-is-spicing-up-the-crossroads/"
                title="Baramee Thai Bistro is Spicing Up the Crossroads"
                press="In Kansas City"
                author="Kelsey Cipolla"
                date="Mar 1, 2019"
                introduction="Baramee Thai Bistro is ready to spice up the Crossroads. A sister location to Lee’s Summit’s popular Mali Thai Bistro, the new restaurant from chef Nutnisa Hoffman and her husband and business partner, Doug, opened in the former Pizzabella space (1810 Baltimore Ave.). Diners can find the chef’s traditional family recipes on display at the location, including her signature Tiger Cry Beef—thinly sliced grilled sirloin topped with potent homemade spicy chili sauce—and Pad Thai."
                featurePicturePath="https://www.inkansascity.com/wp-content/uploads/2019/02/CN_Baramee-Thai-Bistro-3.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/6pRWM9f.jpg"
                urlPath="http://bit.ly/2PVqPHl"
                title="Baramee Thai Bistro Brings Heat to Crossroads"
                press="CityScene KC"
                author="Kevin Collison"
                date="Jan 29, 2019"
                introduction="Crossroads diners beware, here’s an insider warning to the new Baramee Thai Bistro that just opened in the former Pizzabella space at 1810 Baltimore: don’t order your first dish hot.
                “I recommend starting mild,” said co-owner Douglas Hoffman. “For 90 percent of the people, medium is good for them.”"
                featurePicturePath="https://i.imgur.com/51mp8hP.jpg"
              />
              <DesktopNews
                logoPath="https://i.imgur.com/7PSrxBb.jpg"
                urlPath="http://bit.ly/2WQvJ9Q"
                title="New Crossroads Thai restaurant serves up Tom Yum, Thai iced coffee and curry"
                press="The Kansas City Star"
                author="Joyce Smith"
                date="Jan 24, 2019"
                introduction="Douglas and Nutnisa Hoffman often head to the City Market to pick up the freshest produce for their Lee’s Summit restaurant, Mali Thai Bistro.
                So for their second location, they picked a spot close to their vegetable vendors — the former Pizzabella building just a few blocks south of the market in the Crossroads."
                featurePicturePath="https://i.imgur.com/u7gJRsi.png"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DesktopHome
