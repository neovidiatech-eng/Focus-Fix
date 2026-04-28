<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ============================================
    // ضع بريدك الإلكتروني هنا لاستقبال الطلبات
    // ============================================
    $to = "Info@focus-fastestrepair.com"; 
    
    $subject = "طلب صيانة جديد من الموقع";

    // جلب البيانات من النموذج
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : '';
    $device = isset($_POST['device']) ? strip_tags(trim($_POST['device'])) : '';
    $issue = isset($_POST['issue']) ? strip_tags(trim($_POST['issue'])) : '';
    $message_content = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // التحقق من البيانات المطلوبة
    if (empty($name) || empty($phone) || empty($email)) {
        echo "الرجاء تعبئة الحقول المطلوبة (الاسم، الهاتف، والبريد الإلكتروني).";
        exit;
    }

    // محتوى الرسالة
    $email_content = "طلب صيانة جديد تم إرساله من الموقع:\n\n";
    $email_content .= "الاسم: $name\n";
    $email_content .= "رقم الهاتف: $phone\n";
    $email_content .= "البريد الإلكتروني: $email\n";
    $email_content .= "نوع الجهاز: $device\n";
    $email_content .= "نوع العطل: $issue\n";
    $email_content .= "التفاصيل:\n$message_content\n";

    // ترويسة الرسالة
    $headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: $phone\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // إرسال الإيميل
    if (mail($to, $subject, $email_content, $headers)) {
        // إعادة توجيه إلى صفحة الشكر في حالة النجاح
        header("Location: thank-you.html");
        exit;
    } else {
        echo "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.";
    }
} else {
    // منع الوصول المباشر للملف وتوجيه المستخدم للرئيسية
    header("Location: index.html");
    exit;
}
?>
