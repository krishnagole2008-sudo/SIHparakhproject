// print your first project.

const productImage = document.querySelector('#productImage');
productImage.addEventListener('change', () => {
    const projectImageFile = productImage.files[0];
    const imagePreview = document.querySelector('#imagePreview');
    url = URL.createObjectURL(projectImageFile);
    imagePreview.src = url;
    imagePreview.style.display = 'block';
});

const checkButton = document.querySelector('#checkButton');
checkButton.addEventListener('click', () => {
    if (!productImage.files.length) {
        alert('Please select an image before submitting your project.');
        return;
    }
    alert('Your project has been submitted successfully!');
    const statusResult = document.querySelector('#statusResult');
    statusResult.textContent = 'checking...';
})


