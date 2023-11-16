# Calculator.az
```

**Kod Təfərrüatları:**

1. **HTML Elementlərini Əldə Et:**
   - `document.getElementById('num1').value` və `document.getElementById('num2').value` ilə HTML-dəki `num1` və `num2` id-ləri olan input sahələrinin qiymətlərini əldə edirik.
   - `document.getElementById('result')` ilə `result` id-ləri olan elementi əldə edirik ki, nəticəni buraya göstərək.

2. **Ədədlərin Yoxlanılması:**
   - `isNaN(num1)` və `isNaN(num2)` ilə ədədlərin düzgün daxil edilib-edilmədiyini yoxlayırıq.
   - Əgər biri də olsa, `resultElement`-ə 'Düzgün daxil edilməmiş ədəd' mesajını yazırıq və funksiyanı dayandırırıq.

3. **Əməliyyat Switch Bloku:**
   - `switch` bloku ilə `operation` dəyərinə görə müvafiq əməliyyatı seçirik.
   - Hər bir əməliyyat üçün nəticəni hesablayıb, `resultElement`-ə yazırıq.

4. **0-a Bölmənin Nəticəsinin Yoxlanılması:**
   - `num2 !== 0` şərti ilə 0-a bölmə əməliyyatını nəticələndiririk və nəticəni `resultElement`-ə yazırıq.
   - Əgər `num2` 0-a bərabərdirsə, '0-a bölmək mümkün deyil' mesajını yazırıq.

5. **Default:**
   - Əgər `operation` müvafiq şərtlərdən heç birinə uyğun deyilsə, `default` bloku işləyir və 'Yanlış əməliyyat' mesajını `resultElement`-ə yazır.
