function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('#FFFFFF');
	noStroke();
	angleMode(DEGREES);

	let dia = 250;

	fill('#eb5c40');
	ellipse (400,400,dia*5,dia*5);
	fill('#e0504e');
	ellipse (400,400,dia*4,dia*4);
	fill('#d64561');
	ellipse (400,400,dia*3,dia*3);
	fill('#cc3b72');
	ellipse (400,400,dia*2,dia*2);

	scale(1.1);
	translate(-40,-50);

	//hair back
	fill('#18100A');
	ellipse(400,320,400,400);
	rect(200,320,400,195);
	rect(230,515,340,160);
	ellipse(235,359,100,100);
	ellipse(218,432,100,100);
	ellipse(211,504,100,100);
	ellipse(215,585,100,100);
	ellipse(252,650,100,100);
	ellipse(321,682,100,100);
	ellipse(400,688,100,100);
	ellipse(486,683,100,100);
	ellipse(556,650,100,100);
	ellipse(585,594,100,100);
	ellipse(589,517,100,100);
	ellipse(580,435,100,100);
	ellipse(566,358,100,100);

	//neck
	fill('#c68642');
	rect(322.5,500,155,100);
	ellipse(400,600,155,155);

	//face
	fill('#e0ac69');
	ellipse(400,425,250,250);
	rect(275,233,250,192,70,0,0,0);

	//right ear
	fill('#c68642');
	beginShape();
	vertex(525,344.5);
	vertex(558,344.5);
	vertex(550,412.5);
	vertex(525,412.5);
	endShape();

	ellipse(541.5,344.5,33,33);
	ellipse(537.5,412.5,25,25);

	//left ear
	beginShape();
	vertex(275,344.5);
	vertex(242,344.5);
	vertex(250,412.5);
	vertex(275,412.5);
	endShape();

	ellipse(259,344.5,33,33);
	ellipse(262.5,412.5,25,25);

	//eyebrows
	noStroke();
	fill('#312113');
	//right
	ellipse(470,310,52,13);
	//left
	ellipse(334,310,52,13);

	//hair front
	/*fill('#18100A');
	arc(515,137,311.2,311.2,80,155,OPEN);
	beginShape();
	vertex(393,230);
	vertex(530,230);
	vertex(530,296);
	endShape();

	fill('#18100A');
	arc(253,111,390,390,35,95, OPEN);
	beginShape();
	vertex(410,230);
	vertex(263,230);
	vertex(263,309);
	endShape();*/

	
	fill('#000000');
	arc(376.9,233,78.4,78.4,180,0);
	fill('#18100A');
	ellipse(490,243,150,150);


	//eyes and lashes
	noFill();
	stroke('#18100A');
	strokeWeight(6);
	//right
	arc(468,332,78,78,35,145);
	line(500,354,510,354);
	line(496,362,502,367);
	line(485,367,488,376);
	//left
	arc(332,332,78,78,35,145);
	line(300,354,290,354);
	line(304,362,298,368);
	line(315,370,312,376);

	//nose
	noStroke();
	fill('#c68642');
	ellipse(400,376,20,20);
	ellipse(400,425,30,30);
	beginShape();
	vertex(390,376);
	vertex(410,376);
	vertex(415,425);
	vertex(385,425);
	endShape();

	//lips
	fill('#DC3735');
	arc(400,569,233,235,247,293,OPEN);
	arc(400,461,92,110,0,180,OPEN);
	fill('white');
	arc(400,462,86,86,0,180,OPEN);

	//beauty spot
	fill('#49311D');
	ellipse(450,442,4,4);

	let scl = 0.2;

	//right earring
	scale(scl);
	translate(2287.5,1861); //x = 537.5 - (400 * 0.2) / 0.2  | y = 412.5 - (200 * 0.2)  / 0.2
	fill('#FFFFFF');

	//circle1
	ellipse(400,200,100,100);

	//eye shape 1
	fill('#ffc300');
	arc(400,319,115,105,200,340);
	arc(400,280,115,105,20,160);

	//eye shape texture
	fill('#ff9500');
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
	fill('#18100A');
	ellipse(400,400,60,60);

	//last block
	fill('#ffc300');
	ellipse(400,515,100,100);
	rect(350,515,100,100);

	//block texture
	fill('#ff9500');
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
	ellipse(400,460,1,35);

	scale(5);
	translate(-457.5,-372.2);
	noStroke();

	//left earring
	scale(scl);
	translate(912.5,1861); //x = 537.5 - (400 * 0.2) / 0.2  | y = 412.5 - (200 * 0.2)  / 0.2
	fill('#FFFFFF');

	//circle1
	ellipse(400,200,100,100);

	//eye shape 1
	fill('#ffc300');
	arc(400,319,115,105,200,340);
	arc(400,280,115,105,20,160);

	//eye shape texture
	fill('#ff9500');
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
	fill('#18100A');
	ellipse(400,400,60,60);

	//last block
	fill('#ffc300');
	ellipse(400,515,100,100);
	rect(350,515,100,100);

	//block texture
	fill('#ff9500');
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
	ellipse(400,460,1,35);

	scale(5);
	translate(-182.4,-372.2);
	noStroke();

}