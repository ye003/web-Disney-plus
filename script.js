//Daniel Matheus Ilari Defina DLZ
let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		allStars = gsap.utils.toArray('#allStars use'),
		popTl = gsap.timeline({paused: true})

		gsap.set('svg', {
			visibility: 'visible'
		})
		gsap.set(allStars, {
			transformOrigin: '50% 50%',
			opacity: 0
		})
		allStars.forEach((target, i ) => {

				//target.style.opacity = 1;
				let tl = gsap.timeline();

				tl.set(target, {
					opacity: 1
				})
					.fromTo(target, {
						x: 985,
						y: 430,
						rotation: 'random(0, -360)',
						scale:'random(1, 3)'			
				}, {
					duration: 'random(0.15, 2)',
					rotation: 'random(-720, 720)',
					physics2D: {
						velocity: 'random(25, 200)',
						angle:'random(135, 0)',
						gravity: 50
					},
					scale: 0,
					ease: 'sine'
				})

				popTl.add(tl, 0);
						});

		let tl = gsap.timeline({delay: 0});
		tl.fromTo('.arcMask', {
			drawSVG: '0% 0%'
		}, {
			duration: 1,
			drawSVG: '0% 96%',
			ease: 'sine.in'
		})
		.to('#comet', {
			duration: 1,
			motionPath: {
				path: '.arcMask',
				align: ".arcMask",
				alignOrigin: [0.5, 0.5],
				end: 0.98
			},
			//scale: 0.4,
			ease: 'sine.in'
		}, 0)
		.to('#comet', {
			duration: 1,
			scale: 33,
			ease: 'slow(0.3, 0.8, true)'
		}, 0)
		.set('#comet', {
			opacity: 0
		})
		.set('#plus', {
			opacity: 1
		},'-=0')
		.from('#plus', {
			duration: 1,
			scale: 0.5,
			transformOrigin: '50% 50%',
			ease: 'elastic(0.52, 0.7)'
		},'-=0')
		.to('#plus', {
			duration: 1,
			morphSVG: {
				shape: '#plusEnd'
			},
			ease: 'elastic(0.52, 0.7)'
		}, '-=1')
		.to('#logoType', {
			duration: 2,
			opacity: 1
		},'-=1')
		.to(popTl, {
			duration: popTl.duration(),
			time: popTl.duration()
		}, '-=2')

		.to('.flood', {
			duration:2,
			//attr:{
				floodOpacity: 0,
			//},
			ease: 'sine'
		}, '-=2')
.to('#whole', {
			opacity: 0
		}, '+=1')


		document.body.onclick = (e) => {
			popTl.seek(0)
			tl.play(0)
			gsap.set(allStars, {
				opacity: 0
			})			
		}
		//ScrubGSAPTimeline(tl)
		
		//gsap.globalTimeline.timeScale(0.25)