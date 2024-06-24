function toggleDetails(button) {
    var detailsRow = button.parentElement.parentElement.nextElementSibling;
    if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row";
        button.textContent = "إخفاء التفاصيل";
    } else {
        detailsRow.style.display = "none";
        button.textContent = "إظهار التفاصيل";
    }
}

function openModal() {
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var nationalID = document.getElementById('nationalID').value;
    var dob = document.getElementById('dob').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    if (!/^[\u0600-\u06FF\s]+$/.test(fullName)) {
        alert("الاسم يجب أن يحتوي على أحرف عربية فقط");
        return false;
    }
    if (!/^\d{11}$/.test(nationalID)) {
        alert("الرقم الوطني يجب أن يكون 11 رقمًا");
        return false;
    }
    if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
        alert("تاريخ الولادة يجب أن يكون بالشكل dd-mm-yyyy");
        return false;
    }
    if (!/^09\d{8}$/.test(mobile)) {
        alert("رقم الموبايل يجب أن يبدأ بـ 09 ويكون طوله 10 أرقام");
        return false;
    }
    if (!/.+@.+\..+/.test(email)) {
        alert("يرجى إدخال بريد إلكتروني صالح");
        return false;
    }

    alert("تم الإرسال بنجاح");
    closeModal();
    return true;
}
