select u.PAYLOAD_UMNAME as um, u.PAYLOAD_RESULT_DATE as data, dayname(u.PAYLOAD_RESULT_DATE) as dzienTygodnia, u.PAYLOAD_RESULT_TIME as czas, g.NAZWAGRUPY as okienko,
case when g.NAZWAGRUPY in ('D-PRAWA JAZDY','PRAWA JAZDY','Prawa Jazdy','J-PRAWA JAZDY','L: PRAWA JAZDY') then 'PRAWA JAZDY'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU') then '500+ z wykazaniem dochodu'
when g.NAZWAGRUPY in ('A-DOWODY OSOBISTE','DOW. OSOBISTE(SKŁ. DOK.)','Meldunki i dowody','M-MELDUNKI, DOWODY OSOBISTE','MELDUNKI - SKŁADANIE WNIOSKÓW') then 'Dowody osobiste'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU') then '500+ bez wykazania dochodu'
else 'inne' end as nazwasklasyfikowana,
g.CZASOBSLUGI,
g.LICZBAKLWKOLEJCE,
case when LENGTH(RTRIM(TRANSLATE(g.CZASOBSLUGI, '*', ' 0123456789'))) = 0  then g.CZASOBSLUGI else HOUR(TIME(g.CZASOBSLUGI)) * 60 + MINUTE(TIME(g.CZASOBSLUGI)) end as czasoczekiwania
from DASH7396.UMDATA u, DASH7396.UMDATA_PAYLOAD_RESULT_GRUPY g
