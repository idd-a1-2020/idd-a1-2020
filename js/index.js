let haveHitBottom = false

let infiniteScroll = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let docH = document.documentElement.scrollHeight
  let winY = window.scrollY
  let maxY = docH - winH


  if (winY >= maxY) {
    document.querySelector('#content').innerHTML += `
    <section class="fade-in">
    <article class="article-txt">
        <h1 class="article-title">Munich</h1>
        <section id="about" class="about">
            <h1 class="section-title">About</h1>
            <p class="section-paragraph">Tall tankards and high-tech cars, edgy art and Lederhosen – Munich is a city where traditional and modern sit side by side like few places on earth.</p>
            <ul class="sub-info">
                <li>
                    <h2 class="section-subheading">Mine's a Mass</h2>
                    <p class="section-paragraph">Beer has been part of Munich life for at least seven centuries and the brewing tradition is very much alive and kicking today. Nowhere else in Europe has a beer tradition quite like the Bavarian capital with six mammoth breweries pumping out world-class suds to hundreds of beer gardens and beer halls. And the climax to the Munich beer year is, of course, the famous Oktoberfest, attended by over six million people. Germany’s ‘purity law’ guarantees there’s nothing in your Mass (1L tankard) that shouldn’t be, so if you can lift the thing – ‘Prost!’ (Cheers!)</p>
                </li>
                <li>
                    <h2 class="section-subheading">Teutonic Treasure Trove</h2>
                    <p class="section-paragraph">Munich has long been known as the ‘city of art and beer’, so before you head off to the pub, take some time to savour the local art scene. The Kunstareal, Munich’s art quarter, is the place to start, with four major venues displaying everything from Dutch masters to 1960s design. The city also boasts some world-class museums focusing on topics as diverse as Oktoberfest, porcelain and BMW cars. And if that weren't enough, there are still royal palaces to explore – the legacy of 700 years of rule by a single family, the Wittelsbachs.</p>
                </li>
                <li>
                    <h2 class="section-subheading">Well-Heeled Well-Being</h2>
                    <p class="section-paragraph">The locals have a word for it – Gemütlichkeit – that untranslatable intermingling of cosiness, well-being and laid-back attitude. In Munich you will sense it most under the fairy lights of a summer beer garden, people-watching in the English Garden and behind the wheel of a BMW heading south. It may be just the local character, but a large share of Gemütlichkeit must come from the fact that the Bavarian capital is one of the most affluent cities on the planet, it’s economy larger than most small countries, its infrastructure well-tended.</p>
                </li>
                <li>
                    <h2 class="section-subheading">Bizarre Bavaria</h2>
                    <p class="section-paragraph">Munich’s various quirks, the things that make the city the place it is, might be what stick in the memory most. Whether it be the inebriated oompah band, that special knife for eating monster radishes, the Bavarians outrageous dialect, the mad hat traditions of the Oktoberfest or the surfers on the Eisbach wave – you’re sure to discover some freakish aspect of Munich life every day. And then there is the local garb – nowhere else in central Europe do the locals don their traditional costume – the famous Lederhosen and Dirndl – as readily as the Münchners, so why not join them?</p>
                </li>
            </ul>
        </section>

        <section id="places" class="places">
            <h1 class="section-title">Landmarks</h1>
            <p class="section-paragraph">Think of the art scene in Germany and Berlin is probably the first city that springs to mind. While there is no doubt that the capital is a hub of talent, other places boast a strong set of institutions too. Munich is home to some of the country’s biggest museums and most important collections, attracting creative minds from around the world. Here are some artistic highlights not to miss.</p>
                <ul class="sub-info">
                    <li>
                        <h2 class="section-subheading">BMW Welt</h2>
                        <p class="section-paragraph">Next to the Olympiapark, the glass-and-steel, double-cone tornado spiralling down from a dark cloud the size of an aircraft carrier holds BMW Welt, truly a petrolhead's dream. Apart from its role as a prestigious car pick-up centre, this king of showrooms acts as a shop window for BMW's latest models and a show space for the company as a whole.</p>
                            
                        <p class="section-paragraph section-note">Note: Due to COVID-19, it is currently closed until further notice. </p>
                    </li>
                    <li>
                        <h2 class="section-subheading">Hofbräuhaus</h2>
                        <p class="section-paragraph">Even if you don't like beer, every visitor to Munich should make a pilgrimage to the mothership of all beer halls, if only once. Within this major tourist attraction, you'll discover a range of spaces in which to do your Mass lifting: the horse chestnut–shaded garden, the main hall next to the oompah band, tables opposite the industrial-scale kitchen and quieter corners.</p>
                    </li>
                    <li>
                        <h2 class="section-subheading">Kunstareal</h2>
                        <p class="section-paragraph">The Kunstareal is the compact Maxvorstadt area, roughly defined by Türkenstrasse, Schellingstrasse, Luisenstrasse and Karlstrasse, which is packed with southern Germany's finest art museums. These include the Alte Pinakothek, the Museum Brandhorst, the Neue Pinakothek and the Pinakothek der Moderne.</p>
                            
                        <p class="section-paragraph section-note">Note: Just like BMW Welt it is also closed until further notice. </p>
                    </li>
                </ul>
        </section>
        
        <section id="food" class="food">
        <h1 class="section-title">Food</h1>
        <p class="section-paragraph">With internationally recognizable restaurants becoming established in the rapidly growing city of Munich, the elite traveler has such a variety of cuisine to choose from that you will feel you have the world at your fingertips.</p>
            <ul class="sub-info"> 
                <li>
                    <h2 class="section-subheading">Restaurant 181</h2>
                    <p class="section-paragraph">The food is certainly a match for the location. Dinner is spread across two sittings with the sunset dinner taking place at 6pm. For this, the restaurant have devised a dedicated Sunset Menu, which is stripped back to three courses and designed for those wishing to take in the views at the most beautiful time of day. The Feinschmecker Menu allows for a more fine dining experience and is served from 8pm onwards. The offerings change regularly to make best use of seasonal ingredients.</p>
                </li>
                <li>
                    <h2 class="section-subheading">Schwarz & Weiz</h2>
                    <p class="section-paragraph">While the ambiance is perfected to deliver a modern touch, the Schwarz & Weiz restaurant hosts an international mix of tastes. The perfect place to impress a client, this gastronomic kitchen serves both local and international cuisine to a sophisticated crowd.</p>
                </li>
                <li>
                    <h2 class="section-subheading">Sophia’s</h2>
                    <p class="section-paragraph">Michelin starred chef Michael Hüsken is behind the menu here, which places the focus on local and seasonal produce with the integration of some more exotic flavors and ingredients. The interiors here are light-filled and elegant with modern decor.</p>
                    </li>
                <li>
                    <h2 class="section-subheading">Tantris</h2>
                    <p class="section-paragraph">Along with artwork throughout, natural materials complement this venue’s aesthetic. Perfected by Mr. Hans Haas, one of the most renowned chefs in the country, Tantris has held two Michelin stars since 1974, the longest period of any restaurant in Germany. A product of Fritz Eichbauer, this restaurant is now owned by his son, Felix, who can take care of your reservations. VIP visitors can expect a séparée for a maximum of 26 guests and the garden salon can host up to 54 guests. There is also the possibility to rent out the whole restaurant for a maximum of 160 guests. Previous diners have included Woody Allen, Christina Aguilera and Yves Saint Laurent.</p>
                </li>
            </ul>
        </section>
        
        <section id="entertain" class="entertain">
        <h1 class="section-title">Entertainment</h1>
        <ul class="sub-info">
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
            <li>
                <h2 class="section-subheading">Bear Pit Karaoke</h2>
                <p class="section-paragraph"> On most summer Sundays, Berlin’s best free entertainment kicks off around 3pm when Joe Hatchiban sets up his custom-made mobile karaoke unit in the Mauerpark’s amphitheatre. As many as 2000 people cram on to the stone bleachers to cheer and clap for eager crooners ranging from giggling 11-year-olds to Broadway-calibre belters. Check <a href="www.facebook.com/bearpitkaraoke">bearpitkaraoke</a> for exact dates.</p>
            </li>
        </ul>
        </section>
    </article>
`
  }
}


window.addEventListener('load', infiniteScroll)
window.addEventListener('scroll', infiniteScroll)
window.addEventListener('resize', infiniteScroll)