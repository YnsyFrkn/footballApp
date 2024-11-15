Bu projede, futbol severlerin takımlarını kolayca takip edebileceği,liglerin puan durumlarını detaylı inceleyebileceği ve maç fikstürlerini görüntüleyebileceği bir web uygulaması geliştirdim. Uygulamanın tüm verileri TheSportsDB API'si kullanılarak dinamik bir şekilde alınmaktadır.
Aşağıda uygulamanın genel özelliklerini bulabilirsiniz:

Takım Arama ve Bilgi Görüntüleme:
-Kullanıcılar, futbol takımlarını arayabilir ve her bir takım hakkında  bilgilere 
ulaşabilirler.
-API entegrasyonu sayesinde, takım adı, logosu ve maç bilgileri dinamik 
olarak sunuluyor.

Fikstür Görüntüleme:
-Kullanıcılar, seçtikleri ligdeki haftalık fikstürleri inceleyebilir.
-Seçilen haftaya ait maçlar, tarih, maç durumu gibi bilgilerle sunuluyor.

Puan Durumu ve Son 5 Maç:
-Ligdeki takımların sıralamaları, oynadıkları maç sayıları, galibiyet, mağlubiyet, 
beraberlik ve gol averajı gibi veriler gösteriliyor.
-Her takımın son 5 maçının durumu, renkli şekilde işaretleniyor.

Kullanılan Teknolojiler ve Araçlar:
React: Uygulamanın temel yapı taşını oluşturdu. Bileşen tabanlı yaklaşım sayesinde her bir işlevsel kısım bağımsız olarak yönetildi. 
Uygulama boyunca useState ve useEffect gibi hook’lar kullanılarak durum yönetimi ve yan etkilerin kontrolü sağlandı.
React Router: Kullanıcıların sayfalar arasında rahatça gezinmesini sağladı. useNavigate ve useParams hook’larıyla dinamik sayfa geçişleri ve yönlendirmeler uygulandı.
Axios: API istekleriyle futbol takımları ve liglerle ilgili veriler alındı. Uygulama, TheSportsDB API'sinden veri almak için Axios’u kullandı.
Material UI: Uygulamanın bileşenleri için modern ve şık bir tasarım oluşturuldu.
CSS ve Responsive Tasarım: Farklı cihazlarda kullanıcı dostu bir deneyim sunmak için duyarlı tasarım teknikleri kullanıldı.

![LigPuanDurumu](https://github.com/user-attachments/assets/8ff1a734-2f85-4f72-b611-5adc203794cf)
![LigPDurumu](https://github.com/user-attachments/assets/e78906eb-8ec8-41de-a322-cdcf4c2489af)
![SüperLig12 hafta](https://github.com/user-attachments/assets/a452d634-d405-46be-a0c1-ba7298c08091)
![SüperLig13 hafta](https://github.com/user-attachments/assets/d6d0b6ab-5bbb-474e-a431-63f22d6cc75f)
![takım arama](https://github.com/user-attachments/assets/3cd13f78-df7d-4ad9-ad98-695ceb651aa1)
![Yanlsı takım adı girme](https://github.com/user-attachments/assets/c2f520a4-492f-4cda-b2ce-8e434283dbda)
