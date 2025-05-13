// 1. Event Handling
        const clickBtn = document.getElementById('clickBtn');
        const hoverDiv = document.getElementById('hoverDiv');
        
        let pressTimer;
        
        // Button click
        clickBtn.addEventListener('click', () => {
            clickBtn.textContent = "You Clicked Me!";
            clickBtn.style.backgroundColor = "#4dabf7";
            setTimeout(() => {
                clickBtn.textContent = "Click Me Again!";
                clickBtn.style.backgroundColor = "#ff6b6b";
            }, 1000);
        });
        
        // Hover effects
        hoverDiv.addEventListener('mouseenter', () => {
            hoverDiv.textContent = "Wow! You're hovering!";
            hoverDiv.style.backgroundColor = "#d0ebff";
        });
        
        hoverDiv.addEventListener('mouseleave', () => {
            hoverDiv.textContent = "Hover Over Me!";
            hoverDiv.style.backgroundColor = "#e3fafc";
        });
        // Button that changes color
        const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#fcc419', '#9775fa'];
        let colorIndex = 0;
        
        colorChanger.addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            colorChanger.style.backgroundColor = colors[colorIndex];
            colorChanger.classList.add('shake');
            setTimeout(() => {
                colorChanger.classList.remove('shake');
            }, 500);
        });
        
        // Image gallery - simple click effect
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                img.style.transform = 'scale(1.1) rotate(5deg)';
                setTimeout(() => {
                    img.style.transform = 'scale(1)';
                }, 500);
            });
        });
        
        // 3. Form Validation
        const myForm = document.getElementById('myForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const passwordSuccess = document.getElementById('passwordSuccess');
        const strengthIndicator = document.getElementById('strengthIndicator');
        
        // Real-time validation
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
            } else {
                nameError.style.display = 'none';
            }
        });
        
        emailInput.addEventListener('input', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value) && emailInput.value !== '') {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });
        
        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            
            if (password.length > 0 && password.length < 8) {
                passwordError.style.display = 'block';
                passwordSuccess.style.display = 'none';
            } else if (password.length >= 8) {
                passwordError.style.display = 'none';
                passwordSuccess.style.display = 'block';
                
                // Password strength indicator
                if (password.length < 10) {
                    strengthIndicator.textContent = 'medium';
                    strengthIndicator.style.color = '#fcc419';
                } else if (password.length < 12) {
                    strengthIndicator.textContent = 'strong';
                    strengthIndicator.style.color = '#51cf66';
                } else {
                    strengthIndicator.textContent = 'very strong';
                    strengthIndicator.style.color = '#2b8a3e';
                }
            } else {
                passwordError.style.display = 'none';
                passwordSuccess.style.display = 'none';
            }
        });
        
        // Form submission
        myForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                nameInput.classList.add('shake');
                setTimeout(() => nameInput.classList.remove('shake'), 500);
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value !== '' && !emailRegex.test(emailInput.value)) {
                emailError.style.display = 'block';
                emailInput.classList.add('shake');
                setTimeout(() => emailInput.classList.remove('shake'), 500);
                isValid = false;
            }
            
            // Validate password
            if (passwordInput.value !== '' && passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
                passwordInput.classList.add('shake');
                setTimeout(() => passwordInput.classList.remove('shake'), 500);
                isValid = false;
            }
            
            if (isValid) {
                alert('Form submitted successfully!');
                myForm.reset();
                passwordSuccess.style.display = 'none';
            }
        });