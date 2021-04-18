const a = 0.6;
const trnslt = 10;

function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
	background('#FFFFFF');
	noStroke();
	angleMode(DEGREES);

	//red layer

	//top
	fill(255,0,0);
	//fill(255,0,0,a);
	beginShape();
	vertex(58.4,58.8);
	vertex(91.8,58.8);
	vertex(58.4,121);
	endShape();

	beginShape();
	vertex(56.1,153.4);
	vertex(104.5,77.3);
	vertex(204.9,60);
	vertex(117.2,106.1);
	endShape();

	beginShape();
	vertex(118.2,130.5);
	vertex(233.8,66.3);
	vertex(427.5,45.3);
	vertex(266.4,113);
	endShape();

	beginShape();
	vertex(58.7,283.5);
	vertex(58.7,185.4);
	vertex(121.7,146.9);
	vertex(273.6,123.5);
	vertex(177.7,164.4);
	vertex(97.2,208.8);
	endShape();

	beginShape();
	vertex(42.3,415.4);
	vertex(58.7,323.2);
	vertex(87.8,266);
	vertex(184.7,186.6);
	vertex(406.5,183.1);
	vertex(236.1,220.4);
	vertex(126.4,292.8);
	endShape();

	beginShape();
	vertex(212.7,166.7);
	vertex(400.7,159.7);
	vertex(504.6,165.6);
	vertex(565.3,165.6);
	vertex(449.7,134);
	vertex(314.3,129);
	endShape();

	beginShape();
	vertex(427.5,181.9);
	vertex(530.3,202.9);
	vertex(613.2,252);
	vertex(703,352.3);
	vertex(727.6,392);
	vertex(760.2,415.4);
	vertex(734.6,318.5);
	vertex(661,225.1);
	vertex(563,183.1);
	endShape();

	beginShape();
	vertex(299.1,111.9);
	vertex(470.7,111.9);
	vertex(588.6,159.7);
	vertex(693.7,221.6);
	vertex(749.7,301);
	vertex(706.5,173.7);
	vertex(558.3,92);
	vertex(431,66.3);
	endShape();

	beginShape();
	vertex(467.2,59.3);
	vertex(579.3,82.7);
	vertex(635.3,111.9);
	vertex(711.2,164.4);
	vertex(739.2,209.9);
	vertex(707.7,111.9);
	vertex(619,57);
	endShape();

	beginShape();
	vertex(673.9,58.2);
	vertex(718.2,96.7);
	vertex(735.7,156.2);
	vertex(736.9,58.2);
	endShape();

	//bottom
	beginShape();
	vertex(45.6,440.2);
	vertex(16.4,475.5);
	vertex(23.8,531.1);
	vertex(54.6,572.5);
	vertex(113.2,575.4);
	vertex(176.3,609.2);
	vertex(140,560.6);
	vertex(69.3,544.5);
	vertex(45.3,500.7);
	endShape();

	beginShape()
	vertex(43,583.5);
	vertex(105.2,585.6);
	vertex(167.7,621);
	vertex(247.4,684);
	vertex(277.1,703.3);
	vertex(362.6,713.2);
	vertex(273,724.7);
	vertex(192.2,698.1);
	vertex(153.1,642.9);
	vertex(88.5,596);
	endShape();

	beginShape()
	vertex(54.7,606.1);
	vertex(104.7,626.8);
	vertex(142.4,651.6);
	vertex(163.1,695.5);
	vertex(236.6,733.6);
	vertex(237,734);
	vertex(164.3,725.5);
	vertex(104.7,687.7);
	endShape();

	beginShape()
	vertex(55.5,627.7);
	vertex(55.5,730.4);
	vertex(145.7,730.4);
	vertex(90.9,708.9);
	endShape();

	beginShape()
	vertex(195.9,622.5);
	vertex(277.8,685.7);
	vertex(404.5,705.2);
	vertex(544.4,689.6);
	vertex(628.3,607.7);
	vertex(525.6,664);
	vertex(412.1,670.9);
	vertex(309.4,662);
	endShape();

	beginShape()
	vertex(647.4,594.4);
	vertex(691.1,534.4);
	vertex(707.3,496.3);
	vertex(753.2,468.3);
	vertex(773.4,423);
	vertex(773.4,494.6);
	vertex(733.1,518.2);
	vertex(697.2,565.2);
	endShape();

	beginShape()
	vertex(555.5,699);
	vertex(627.2,626.8);
	vertex(670.6,595.8);
	vertex(716,578);
	vertex(738.4,534.5);
	vertex(773.3,512.1);
	vertex(754.4,552.8);
	vertex(735.5,607.3);
	vertex(681.6,623.9);
	endShape();

	beginShape();
	vertex(334.7,732);
	vertex(383.1,713.4);
	vertex(579.7,705.7);
	vertex(685.3,638.2);
	vertex(746.2,622.1);
	vertex(673.9,673.5);
	vertex(605.1,730.8);
	vertex(528.3,743.8);
	vertex(457.4,735);
	vertex(395,730.8);
	endShape();

	beginShape();
	vertex(625.3,732.2);
	vertex(665,732.2);
	vertex(735.4,650);
	endShape();
	
	beginShape();
	vertex(689.9,732.4);
	vertex(736.9,672.3);
	vertex(736.9,732.4);
	endShape();

	//eye
	beginShape();
	vertex(64,441);
	vertex(105,349);
	vertex(171,282);
	vertex(247,240);
	vertex(347,218);
	vertex(494,226);
	vertex(590,273);
	vertex(649,324);
	vertex(698,396);
	vertex(565,301);
	vertex(430,261);
	vertex(317,268);
	vertex(218,301);
	vertex(128,373);
	endShape();

	beginShape()
	vertex(123,463);
	vertex(168,368);
	vertex(230,323);
	vertex(307,289);
	vertex(405,275);
	vertex(509,304);
	vertex(586,350);
	vertex(645,394);
	vertex(731,428);
	vertex(661,426);
	vertex(605,410);
	vertex(573,381);
	vertex(474,327);
	vertex(353,312);
	vertex(272,333);
	vertex(192,388);
	endShape();

	beginShape();
	vertex(169,428);
	vertex(140,455);
	vertex(134,475);
	vertex(146,513);
	vertex(208,509);
	vertex(164,492);
	vertex(156,465);
	endShape();

	beginShape()
	vertex(107,480);
	vertex(110,499);
	vertex(118,520);
	vertex(164,531);
	vertex(92,530);
	vertex(79,522);
	vertex(88,500);
	endShape();

	beginShape();
	vertex(302,333);
	vertex(281,397);
	vertex(293,435);
	vertex(318,474);
	vertex(363,493);
	vertex(434,485);
	vertex(475,457);
	vertex(497,404);
	vertex(495,348);
	vertex(515,357);
	vertex(518,376);
	vertex(516,425);
	vertex(487,480);
	vertex(436,515);
	vertex(366,523);
	vertex(311,508);
	vertex(268,463);
	vertex(252,400);
	vertex(273,342);
	endShape();

	beginShape();
	vertex(374,367);
	vertex(401,365);
	vertex(416,375);
	vertex(422,396);
	vertex(422,414);
	vertex(404,432);
	vertex(379,435);
	vertex(356,423);
	vertex(349,403);
	vertex(353,377);
	endShape();

	//eye triangles
	beginShape();
	vertex(377,362);
	vertex(399,360);
	vertex(384,320);
	endShape();

	beginShape();
	vertex(405,362);
	vertex(421,346);
	vertex(416,372);
	endShape();

	beginShape();
	vertex(420,374);
	vertex(489,362);
	vertex(428,392);
	endShape();

	beginShape();
	vertex(428,397);
	vertex(481,417);
	vertex(427,414);
	endShape();

	beginShape();
	vertex(425,417);
	vertex(470,451);
	vertex(421,425);
	endShape();

	beginShape();
	vertex(415,428);
	vertex(429,454);
	vertex(404,437);
	endShape();

	beginShape();
	vertex(397,438);
	vertex(389,489);
	vertex(379,438);
	endShape();

	beginShape();
	vertex(356,428);
	vertex(366,434);
	vertex(328,473);
	endShape();

	beginShape();
	vertex(351,425);
	vertex(345,405);
	vertex(294,426);
	endShape();

	beginShape();
	vertex(347,399);
	vertex(350,382);
	vertex(310,383);
	endShape();

	beginShape();
	vertex(350,376);
	vertex(362,368);
	vertex(326,325);
	endShape();

	//under eye
	beginShape();
	vertex(185,519);
	vertex(217,511);
	vertex(390,531);
	vertex(515,501);
	vertex(580,451);
	vertex(607,415);
	vertex(652,426);
	vertex(596,485);
	vertex(534,528);
	vertex(445,552);
	vertex(370,558);
	vertex(272,546);
	endShape();

	beginShape();
	vertex(163,556);
	vertex(242,584);
	vertex(324,605);
	vertex(438,609);
	vertex(574,573);
	vertex(690,490);
	vertex(663,550);
	vertex(576,615);
	vertex(446,654);
	vertex(325,643);
	vertex(216,612);
	endShape();
	
	//eyelashes
	beginShape();
	vertex(208,529);
	vertex(222,536);
	vertex(194,550);
	endShape();

	beginShape();
	vertex(232,539);
	vertex(265,548);
	vertex(229,572);
	endShape();

	beginShape();
	vertex(355,563);
	vertex(387,562);
	vertex(371,602);
	endShape();

	beginShape();
	vertex(405,561);
	vertex(416,588);
	vertex(426,560);
	endShape();

	beginShape();
	vertex(489,546);
	vertex(523,538);
	vertex(523,581);
	endShape();

	beginShape();
	vertex(563,516);
	vertex(585,499);
	vertex(611,535);
	endShape();

	beginShape();
	vertex(600,489);
	vertex(618,472);
	vertex(643,507);
	endShape();

	beginShape();
	vertex(625,464);
	vertex(643,442);
	vertex(723,473);
	endShape();

	//blue layer
	translate(trnslt,trnslt);

	//top
	fill(0,0,255,a);
	beginShape();
	vertex(58.4,58.8);
	vertex(91.8,58.8);
	vertex(58.4,121);
	endShape();

	beginShape();
	vertex(56.1,153.4);
	vertex(104.5,77.3);
	vertex(204.9,60);
	vertex(117.2,106.1);
	endShape();

	beginShape();
	vertex(118.2,130.5);
	vertex(233.8,66.3);
	vertex(427.5,45.3);
	vertex(266.4,113);
	endShape();

	beginShape();
	vertex(58.7,283.5);
	vertex(58.7,185.4);
	vertex(121.7,146.9);
	vertex(273.6,123.5);
	vertex(177.7,164.4);
	vertex(97.2,208.8);
	endShape();

	beginShape();
	vertex(42.3,415.4);
	vertex(58.7,323.2);
	vertex(87.8,266);
	vertex(184.7,186.6);
	vertex(406.5,183.1);
	vertex(236.1,220.4);
	vertex(126.4,292.8);
	endShape();

	beginShape();
	vertex(212.7,166.7);
	vertex(400.7,159.7);
	vertex(504.6,165.6);
	vertex(565.3,165.6);
	vertex(449.7,134);
	vertex(314.3,129);
	endShape();

	beginShape();
	vertex(427.5,181.9);
	vertex(530.3,202.9);
	vertex(613.2,252);
	vertex(703,352.3);
	vertex(727.6,392);
	vertex(760.2,415.4);
	vertex(734.6,318.5);
	vertex(661,225.1);
	vertex(563,183.1);
	endShape();

	beginShape();
	vertex(299.1,111.9);
	vertex(470.7,111.9);
	vertex(588.6,159.7);
	vertex(693.7,221.6);
	vertex(749.7,301);
	vertex(706.5,173.7);
	vertex(558.3,92);
	vertex(431,66.3);
	endShape();

	beginShape();
	vertex(467.2,59.3);
	vertex(579.3,82.7);
	vertex(635.3,111.9);
	vertex(711.2,164.4);
	vertex(739.2,209.9);
	vertex(707.7,111.9);
	vertex(619,57);
	endShape();

	beginShape();
	vertex(673.9,58.2);
	vertex(718.2,96.7);
	vertex(735.7,156.2);
	vertex(736.9,58.2);
	endShape();

	//bottom
	beginShape();
	vertex(45.6,440.2);
	vertex(16.4,475.5);
	vertex(23.8,531.1);
	vertex(54.6,572.5);
	vertex(113.2,575.4);
	vertex(176.3,609.2);
	vertex(140,560.6);
	vertex(69.3,544.5);
	vertex(45.3,500.7);
	endShape();

	beginShape()
	vertex(43,583.5);
	vertex(105.2,585.6);
	vertex(167.7,621);
	vertex(247.4,684);
	vertex(277.1,703.3);
	vertex(362.6,713.2);
	vertex(273,724.7);
	vertex(192.2,698.1);
	vertex(153.1,642.9);
	vertex(88.5,596);
	endShape();

	beginShape()
	vertex(54.7,606.1);
	vertex(104.7,626.8);
	vertex(142.4,651.6);
	vertex(163.1,695.5);
	vertex(236.6,733.6);
	vertex(237,734);
	vertex(164.3,725.5);
	vertex(104.7,687.7);
	endShape();

	beginShape()
	vertex(55.5,627.7);
	vertex(55.5,730.4);
	vertex(145.7,730.4);
	vertex(90.9,708.9);
	endShape();

	beginShape()
	vertex(195.9,622.5);
	vertex(277.8,685.7);
	vertex(404.5,705.2);
	vertex(544.4,689.6);
	vertex(628.3,607.7);
	vertex(525.6,664);
	vertex(412.1,670.9);
	vertex(309.4,662);
	endShape();

	beginShape()
	vertex(647.4,594.4);
	vertex(691.1,534.4);
	vertex(707.3,496.3);
	vertex(753.2,468.3);
	vertex(773.4,423);
	vertex(773.4,494.6);
	vertex(733.1,518.2);
	vertex(697.2,565.2);
	endShape();

	beginShape()
	vertex(555.5,699);
	vertex(627.2,626.8);
	vertex(670.6,595.8);
	vertex(716,578);
	vertex(738.4,534.5);
	vertex(773.3,512.1);
	vertex(754.4,552.8);
	vertex(735.5,607.3);
	vertex(681.6,623.9);
	endShape();

	beginShape();
	vertex(334.7,732);
	vertex(383.1,713.4);
	vertex(579.7,705.7);
	vertex(685.3,638.2);
	vertex(746.2,622.1);
	vertex(673.9,673.5);
	vertex(605.1,730.8);
	vertex(528.3,743.8);
	vertex(457.4,735);
	vertex(395,730.8);
	endShape();

	beginShape();
	vertex(625.3,732.2);
	vertex(665,732.2);
	vertex(735.4,650);
	endShape();
	
	beginShape();
	vertex(689.9,732.4);
	vertex(736.9,672.3);
	vertex(736.9,732.4);
	endShape();

	//eye
	beginShape();
	vertex(64,441);
	vertex(105,349);
	vertex(171,282);
	vertex(247,240);
	vertex(347,218);
	vertex(494,226);
	vertex(590,273);
	vertex(649,324);
	vertex(698,396);
	vertex(565,301);
	vertex(430,261);
	vertex(317,268);
	vertex(218,301);
	vertex(128,373);
	endShape();

	beginShape()
	vertex(123,463);
	vertex(168,368);
	vertex(230,323);
	vertex(307,289);
	vertex(405,275);
	vertex(509,304);
	vertex(586,350);
	vertex(645,394);
	vertex(731,428);
	vertex(661,426);
	vertex(605,410);
	vertex(573,381);
	vertex(474,327);
	vertex(353,312);
	vertex(272,333);
	vertex(192,388);
	endShape();

	beginShape();
	vertex(169,428);
	vertex(140,455);
	vertex(134,475);
	vertex(146,513);
	vertex(208,509);
	vertex(164,492);
	vertex(156,465);
	endShape();

	beginShape()
	vertex(107,480);
	vertex(110,499);
	vertex(118,520);
	vertex(164,531);
	vertex(92,530);
	vertex(79,522);
	vertex(88,500);
	endShape();

	beginShape();
	vertex(302,333);
	vertex(281,397);
	vertex(293,435);
	vertex(318,474);
	vertex(363,493);
	vertex(434,485);
	vertex(475,457);
	vertex(497,404);
	vertex(495,348);
	vertex(515,357);
	vertex(518,376);
	vertex(516,425);
	vertex(487,480);
	vertex(436,515);
	vertex(366,523);
	vertex(311,508);
	vertex(268,463);
	vertex(252,400);
	vertex(273,342);
	endShape();

	beginShape();
	vertex(374,367);
	vertex(401,365);
	vertex(416,375);
	vertex(422,396);
	vertex(422,414);
	vertex(404,432);
	vertex(379,435);
	vertex(356,423);
	vertex(349,403);
	vertex(353,377);
	endShape();
	
	//eye triangles
	beginShape();
	vertex(377,362);
	vertex(399,360);
	vertex(384,320);
	endShape();

	beginShape();
	vertex(405,362);
	vertex(421,346);
	vertex(416,372);
	endShape();

	beginShape();
	vertex(420,374);
	vertex(489,362);
	vertex(428,392);
	endShape();

	beginShape();
	vertex(428,397);
	vertex(481,417);
	vertex(427,414);
	endShape();

	beginShape();
	vertex(425,417);
	vertex(470,451);
	vertex(421,425);
	endShape();

	beginShape();
	vertex(415,428);
	vertex(429,454);
	vertex(404,437);
	endShape();

	beginShape();
	vertex(397,438);
	vertex(389,489);
	vertex(379,438);
	endShape();

	beginShape();
	vertex(356,428);
	vertex(366,434);
	vertex(328,473);
	endShape();

	beginShape();
	vertex(351,425);
	vertex(345,405);
	vertex(294,426);
	endShape();

	beginShape();
	vertex(347,399);
	vertex(350,382);
	vertex(310,383);
	endShape();

	beginShape();
	vertex(350,376);
	vertex(362,368);
	vertex(326,325);
	endShape();

	//under eye
	beginShape();
	vertex(185,519);
	vertex(217,511);
	vertex(390,531);
	vertex(515,501);
	vertex(580,451);
	vertex(607,415);
	vertex(652,426);
	vertex(596,485);
	vertex(534,528);
	vertex(445,552);
	vertex(370,558);
	vertex(272,546);
	endShape();

	beginShape();
	vertex(163,556);
	vertex(242,584);
	vertex(324,605);
	vertex(438,609);
	vertex(574,573);
	vertex(690,490);
	vertex(663,550);
	vertex(576,615);
	vertex(446,654);
	vertex(325,643);
	vertex(216,612);
	endShape();

	//eyelashes
	beginShape();
	vertex(208,529);
	vertex(222,536);
	vertex(194,550);
	endShape();

	beginShape();
	vertex(232,539);
	vertex(265,548);
	vertex(229,572);
	endShape();

	beginShape();
	vertex(355,563);
	vertex(387,562);
	vertex(371,602);
	endShape();

	beginShape();
	vertex(405,561);
	vertex(416,588);
	vertex(426,560);
	endShape();

	beginShape();
	vertex(489,546);
	vertex(523,538);
	vertex(523,581);
	endShape();

	beginShape();
	vertex(563,516);
	vertex(585,499);
	vertex(611,535);
	endShape();

	beginShape();
	vertex(600,489);
	vertex(618,472);
	vertex(643,507);
	endShape();

	beginShape();
	vertex(625,464);
	vertex(643,442);
	vertex(723,473);
	endShape();

}