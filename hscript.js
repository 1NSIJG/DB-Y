let myForm = document.getElementById('Form');
				
				myForm.addEventListener('submit', function(e) {
					let myInput = document.getElementById('username');

					if (myInput.value.trim() = "") {
						e.preventDefault();
					}


				});