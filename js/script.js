const elBody = document.querySelector('body');
const elBtn = document.getElementById('btn');
const elModal = document.getElementById('modal');
const elCloseModal = document.getElementById('close-modal');
const elOpacity = document.getElementById('opacity');

// ============================= BODY START ============================= //

elBody.style.paddingTop = '200px';
elBody.style.backgroundColor = '#35bd35';

// ============================= BODY END ============================= //

// ============================= BTN START ============================= //

elBtn.style.position = 'absolute';
elBtn.style.bottom = '220px';
elBtn.style.width = '200px';
elBtn.style.margin = '0 430px';
elBtn.style.padding = '10px 20px';
elBtn.style.borderRadius = '20px';
elBtn.style.cursor = 'pointer';
elBtn.style.marginBottom = '50px';
elBtn.style.zIndex = '-1';

function elOpenModal() {
    elModal.style.display = 'inline-block';
    elOpacity.style.display = 'inline-block';
}

// ============================= BTN END ============================= //

// ============================= MODAL START ============================= //

elModal.style.position = 'relative';
elModal.style.width = '600px';
elModal.style.padding = '20px';
elModal.style.margin = '0 200px';
elModal.style.backgroundColor = 'white';
elModal.style.display = 'none';
elModal.style.borderRadius = '20px';

// ============================= MODAL END ============================= //

// ============================= CLOSE MODAL START ============================= //

function CloseModal() {
    elModal.style.display = 'none';
    elOpacity.style.display = 'none';
}

elCloseModal.style.position = 'absolute';
elCloseModal.style.top = '-13px';
elCloseModal.style.right = '-16px';
elCloseModal.style.padding = '10px';
elCloseModal.style.borderRadius = '50%';
elCloseModal.style.cursor = 'pointer';
elCloseModal.style.border = 'none';

// ============================= CLOSE MADOL END ============================= //

// ============================= OPACITY START ============================= //

elOpacity.addEventListener('click', function () {
    elModal.style.display = 'none';
    elOpacity.style.display = 'none';
    elOpacity.style.cursor = 'pointer';
})

elOpacity.style.position = 'absolute';
elOpacity.style.left = '0px';
elOpacity.style.top = '0px';
elOpacity.style.width = '1202px';
elOpacity.style.height = '1000px';
elOpacity.style.cursor = 'pointer';
elOpacity.style.display = 'none';
elOpacity.style.backgroundColor = '#000000ad';
elOpacity.style.zIndex = '-1';

// ============================= OPACITY END ============================= //