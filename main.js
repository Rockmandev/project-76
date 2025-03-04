
    const constellations = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", ];
        const descriptions = [
            "The Northern constellation of Aries, the Ram, is best viewed in Winter during the month of December. It's brightest star is Hamal at magnitude 2.00. The boundary of the Aries constellation contains 11 stars that host known exoplanets. Aries is one of the original constellations that was devised by the Ancient Greco-Egyptian astronomer Ptolemy who lived between 90 A.D. and 168 A.D. There are 4 stars that make up the main constellation.",
            "Taurus represents a bull and is one of the most magnificent and interesting constellations in the sky. In Greek mythology, the god Zeus turned himself into a bull to carry princess Europa off to Crete. The brightest star in Taurus is Aldebaran, which people think of as the bull's right eye. The bright star Alnath is thought to be at the tip of the bull's right horn.  It is one of the oldest constellations, dating back at least to the Early Bronze Age. Taurus hosts the Pleiades and the Crab Nebula, which is a remnant of a supernova.",
            "Gemini means The Twins and is located in the northern hemisphere of the sky. Gemini is one of the original constellations that was devised by the Ancient Greco-Egyptian astronomer Ptolemy. There are 17 stars that make up the main constellation. In Greek mythology, Gemini was associated with the myth of Castor and Pollux, the children of Leda and Argonauts.",
            "Cancer is located in the Northern celestial hemisphere and is very dim. Its name is Latin for crab and it is commonly represented as one. Cancer is best known among stargazers as the home of Praesepe (Messier 44), an open cluster also called the Beehive Cluster, located right in the centre of the constellation. In Greek mythology, Cancer is identified with the crab that appeared while Heracles fought the many-headed Hydra. Hercules slew the crab after it bit him in the foot. Afterwards, the goddess Hera, an enemy of Heracles, placed the crab among the stars.",
            "The Northern constellation of Leo, the Lion, is best viewed in Spring during the month of April. Its brightest star is Regulus at magnitude 1.35. The boundary of the Leo constellation contains 19 stars that host known exoplanets. Leo hosts Wolf-359, the 5th closest star to Earth at 7.86 light years. The lion's mane and shoulders also form an asterism known as \"The Sickle,\" which to modern observers may resemble a backwards \"question mark.\" The Persians called Leo Ser or Shir; the Turks, Artan; the Syrians, Aryo; the Jews, Arye; the Indians, Simha, all meaning \"lion\".",
            "Virgo is the largest constellation in the zodiac. The ecliptic intersects the celestial equator within this constellation and Pisces. This means that the sun passes directly overhead of the equator, within this constellation, at the September equinox. Virgo can be easily found through its brightest star, Spica. In the northern sky, Virgo is visible all night in March and April.",
            "The constellation Libra, the scales, is visible at latitudes between 65 degrees and -90 degrees. It is a medium-sized constellation occupying an area of 538 square degrees, and fairly faint. Libra was known in Babylonian astronomy as MUL Zibanu (the \"scales\" or \"balance\"), or alternatively as the Claws of the Scorpion. In ancient Egypt the three brightest stars of Libra (α, β, and σ Librae) formed a constellation that was viewed as a boat. Libra is home to the Gliese 581 planetary system.",
            "Scorpius is located in the Southern celestial hemisphere. Scorpius is easy to find and contains many bright stars, including Antares, \"rival of Mars,\" Acrab, a triple star; Dschubba, \"the forehead\"; Sargas, Jabbah, Fang, Alniyat, and Paikauhale. Marking the tip of the scorpion's curved tail are Shaula and Lesath, whose names both mean \"sting.\" Given their proximity to one another, Shaula and Lesath are sometimes referred to as the Cat's Eyes.",
            "Sagittarius is one of the constellations of the zodiac and is located in the Southern celestial hemisphere. It is easy to find due to the fact it lies on the Milky Way and its brightest stars form an asterism known as the Teapot. Around it we can see several open and globular clusters, nebulae, and Galaxies from earth. In particular, the supermassive black hole at the centre of the Milky Way galaxy is located there.",
            "The Southern constellation of Capricornus, the Goat, is best viewed in Fall during the month of September. Capricornus is a faint constellation. Its brightest star is Deneb Algedi at magnitude 2.85. The boundary of the Capricornus constellation contains 8 stars that host known exoplanets, and several stars and star clusters. Capricornus is also sometimes identified as Pan, the god with a goat's horns and legs, who saved himself from the monster Typhon by giving himself a fish's tail and diving into a river.",
            "The Southern constellation of Aquarius, the Water Bearer, is best viewed in Fall during the month of October. It's brightest star is Sadalsuud at magnitude 2.90. The boundary of the Aquarius constellation contains 17 stars that host known exoplanets. Aquarius is identified as GU.LA \"The Great One\" in the Babylonian star catalogues and represents the god Ea himself, who is commonly depicted holding an overflowing vase.",
            "Pisces lies between Aquarius and Aries in the zodiac. The constellation name means The Fishes . There are 21 stars that make up the main constellation. The ecliptic and the celestial equator intersect within this constellation. The March equinox is currently located in Pisces. Pisces is associated with the Greek legend that Aphrodite and her son Eros either shape-shifted into forms of fishes to escape, or were rescued by two fishes.",
        ];
        const videos = [
            "aries-widder",
            "taurus",
            "Gemini",
            "CancerCrabKrebs",
            "leo",
            "virgo-jungfrau",
            "libra-dieWaage",
            "scorpius2",
            "sagittarius2",
            "Capricornus",
            "aquarius",
            "pisces2",
        ];
        var totalrotation = 0;
        var startbgX = -1300;
        var startbgy = 100;

        function myrotate() {
            let id = null;
            const elem = document.querySelector("#img");
            let pos = totalrotation - 30;
            clearInterval(id);
            id = setInterval(frame, 5);

            function frame() {
                if (pos == totalrotation) {
                    clearInterval(id);
                } else {
                    pos++;
                    var rotate = "rotate(" + pos + "deg)"
                    elem.style.transform = rotate;
                }
            }
        }

        function next_constellation() {
            totalrotation = totalrotation + 30
            myrotate()
            var totalsteps = totalrotation / 30;
            var n = totalsteps % 12;

            document.getElementById("name").innerHTML = constellations[n];
            console.log("<source src=\"zodiac sign videos\\" + videos[n] + ".mp4\" type=\"video/mp4\">");
            document.getElementById("video").src = "zodiac sign videos\\" + videos[n] + ".mp4";
            startbgX = startbgX + 250;
            if (startbgX == -50) {
                startbgX = -2800
            }
            document.body.style.backgroundPosition = startbgX + "px " + startbgy + "px";
            console.log(startbgX);
            document.getElementById("describe").innerHTML = descriptions[n];
        }
