function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('#007f5f');
	noStroke();
	fill('#55a630');
	rect(100,100,600,600);
	angleMode(DEGREES);

	/*
	//one earring
	fill('#FFFFFF');

	//circle1
	ellipse(400,200,100,100);

	//eye shape 1
	arc(400,319,115,105,200,340);
	arc(400,280,115,105,20,160);

	//eye shape texture
	fill('lightgrey');
	ellipse(362,300,12,12);
	ellipse(375,284,12,12);
	ellipse(377,316,12,12);
	ellipse(385,298,12,12);
	ellipse(403,289,12,12);
	ellipse(400,307,12,12);
	ellipse(422,282,12,12);
	ellipse(419,301,12,12);
	ellipse(420,317,12,12);
	ellipse(440,300,12,12);

	//circle2
	fill('#FFFFFF');
	ellipse(400,400,100,100);
	fill('grey');
	ellipse(400,400,60,60);

	//last block
	fill('#FFFFFF');
	ellipse(400,515,100,100);
	rect(350,515,100,100);

	//block texture
	fill('lightgrey');
	ellipse(383,482,12,12);
	ellipse(400,494,12,12);
	ellipse(421,482,12,12);
	ellipse(366,498,12,12);
	ellipse(384,506,12,12);
	ellipse(424,501,12,12);
	ellipse(362,519,12,12);
	ellipse(383,527,12,12);
	ellipse(437,520,12,12);
	ellipse(407,516,12,12);

	ellipse(366,542,12,12);
	ellipse(405,537,12,12);
	ellipse(424,532,12,12);
	ellipse(389,552,12,12);
	ellipse(363,566,12,12);
	ellipse(424,532,12,12);

	ellipse(372,584,12,12);
	ellipse(397,577,12,12);
	ellipse(414,556,12,12);
	ellipse(436,550,12,12);

	ellipse(364,600,12,12);
	ellipse(390,603,12,12);
	ellipse(413,594,12,12);
	ellipse(430,577,12,12);
	ellipse(434,603,12,12);


	//ringlets
	stroke('gold');
	strokeWeight(8);
	ellipse(400,258,1,35);
	ellipse(400,340,1,35);
	ellipse(400,460,1,35); */

	//right ear
		fill('#FFFFFF');

	//circle1
	ellipse(500,200,100,100);

	//eye shape 1
	fill('#ffc300');
	arc(500,319,115,105,200,340);
	arc(500,280,115,105,20,160);

	//eye shape texture
	fill('#ff9500');
	ellipse(462,300,12,12);
	ellipse(475,284,12,12);
	ellipse(477,316,12,12);
	ellipse(485,298,12,12);
	ellipse(503,289,12,12);
	ellipse(500,307,12,12);
	ellipse(522,282,12,12);
	ellipse(519,301,12,12);
	ellipse(520,317,12,12);
	ellipse(540,300,12,12);

	//circle2
	fill('#FFFFFF');
	ellipse(500,400,100,100);
	fill('#55a630');
	ellipse(500,400,60,60);

	//last block
	fill('#ffc300');
	ellipse(500,515,100,100);
	rect(450,515,100,100);

	//block texture
	fill('#ff9500');
	ellipse(483,482,12,12);
	ellipse(500,494,12,12);
	ellipse(521,482,12,12);
	ellipse(466,498,12,12);
	ellipse(484,506,12,12);
	ellipse(524,501,12,12);
	ellipse(462,519,12,12);
	ellipse(483,527,12,12);
	ellipse(537,520,12,12);
	ellipse(507,516,12,12);

	ellipse(466,542,12,12);
	ellipse(505,537,12,12);
	ellipse(524,532,12,12);
	ellipse(489,552,12,12);
	ellipse(463,566,12,12);
	ellipse(524,532,12,12);

	ellipse(472,584,12,12);
	ellipse(497,577,12,12);
	ellipse(514,556,12,12);
	ellipse(536,550,12,12);

	ellipse(464,600,12,12);
	ellipse(490,603,12,12);
	ellipse(513,594,12,12);
	ellipse(530,577,12,12);
	ellipse(534,603,12,12);


	//ringlets
	stroke('gold');
	strokeWeight(8);
	ellipse(500,258,1,35);
	ellipse(500,340,1,35);
	ellipse(500,460,1,35);



	//left ear
	noStroke();
	fill('#FFFFFF');

	//circle1
	ellipse(300,200,100,100);

	//eye shape 1
	fill('#ffc300');
	arc(300,319,115,105,200,340);
	arc(300,280,115,105,20,160);

	//eye shape texture
	fill('#ff9500');
	ellipse(262,300,12,12);
	ellipse(275,284,12,12);
	ellipse(277,316,12,12);
	ellipse(285,298,12,12);
	ellipse(303,289,12,12);
	ellipse(300,307,12,12);
	ellipse(322,282,12,12);
	ellipse(319,301,12,12);
	ellipse(320,317,12,12);
	ellipse(340,300,12,12);

	//circle2
	fill('#FFFFFF');
	ellipse(300,400,100,100);
	fill('#55a630');
	ellipse(300,400,60,60);

	//last block
	fill('#ffc300');
	ellipse(300,515,100,100);
	rect(250,515,100,100);

	//block texture
	fill('#ff9500');
	ellipse(283,482,12,12);
	ellipse(300,494,12,12);
	ellipse(321,482,12,12);
	ellipse(266,498,12,12);
	ellipse(284,506,12,12);
	ellipse(324,501,12,12);
	ellipse(262,519,12,12);
	ellipse(283,527,12,12);
	ellipse(337,520,12,12);
	ellipse(307,516,12,12);

	ellipse(266,542,12,12);
	ellipse(305,537,12,12);
	ellipse(324,532,12,12);
	ellipse(289,552,12,12);
	ellipse(263,566,12,12);
	ellipse(324,532,12,12);

	ellipse(272,584,12,12);
	ellipse(297,577,12,12);
	ellipse(314,556,12,12);
	ellipse(336,550,12,12);

	ellipse(264,600,12,12);
	ellipse(290,603,12,12);
	ellipse(313,594,12,12);
	ellipse(330,577,12,12);
	ellipse(334,603,12,12);


	//ringlets
	stroke('gold');
	strokeWeight(8);
	ellipse(300,258,1,35);
	ellipse(300,340,1,35);
	ellipse(300,460,1,35);

}
