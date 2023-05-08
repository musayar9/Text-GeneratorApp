# Tanım

Bu proje [Create React App](https://github.com/facebook/create-react-app) ile hazırlanmıştır. Projenin state yönetimi Redux-Toolkit ile yapılmıştır.Sitenin tasarımı Tailwindcss ile yapılmıştır. Site tasarımı mobile, tablet ve bilgisayar'lara duyarlı olarak responsive yapı da tasarlanmıştır.


Projede [https://baconipsum.com/](https://baconipsum.com/api/?type=all-meat&paras=5$&format=text)  baconipsum sitesi üzerinden aldığımmız api ile bir  sample text generator app uygulaması yaptık. Bu uygulamada redux-toolkit  kullanarak thunk ile api üzerinden veri çektik. Bu veri üzerinden işlem yapabilmemiz için 2 tane sorgu işlemi yapmamız gerekiyor. Bu sorgu işlemleri paras ve format . Paras bize dönecek olan paragraf sayısı biligisini, format ise bize gelecek olan paragrafın hangi formata geleceği (text veya html) biligisini verecek. Paras sorgusu içn bir input alanı oluşturduk bu input alanına gireceğimiz herhangi bir number değeri bize paragraf sayısını dönecek. Format için ise evet ve hayır şeklinde  seçenek  oluşturduk. Evet seçeneğini  seçersek bize html formatta bir çıktı gelecek, hayır seçeneğini seçersek ise bize text formatta bir çıktı gelecek

## Kullanıla Teknolojiler
1. React
2. Redux-Toolkit
3. Tailwindcss
