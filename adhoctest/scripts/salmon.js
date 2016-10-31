
		function init() {
			$(".slide").each(function(i) {
				$(this).delay(i * 3000).fadeIn(2000).delay(1000).fadeOut(2000);
			});

			setTimeout(function() {
				$(".slide").each(function() {
						$(this).css("position", "relative").fadeIn(3000);	
				});				
			}, 8000);			
		}
	
		function step1() {
			$("#pic1").fadeIn(2000).delay(1000).fadeOut(2000);
			return $("#pic2").delay(3000).fadeIn(2000).delay(1000).fadeOut(1000);
		}
		
		function step2() {
			return $("#pic1").add($("#pic2")).css("position", "relative").delay(1000).fadeIn(3000);
		}
		
		function run(steps, current) {
			var len = steps.length;
			if (current < len) {
				var step = steps[current];
				step().queue(function(next) {
					run(steps, current + 1);
					next();
				});
			}
		}
		
		$(document).ready(function() {
			var steps = [step1, step2];
			run(steps, 0);
		});
