select row_number() over() rownumber, u.PAYLOAD_UMNAME as um, u.PAYLOAD_RESULT_DATE as data, dayname(u.PAYLOAD_RESULT_DATE) as dzienTygodnia, u.PAYLOAD_RESULT_TIME as czas, g.NAZWAGRUPY as okienko,
case when g.NAZWAGRUPY in ('D-PRAWA JAZDY','PRAWA JAZDY','Prawa Jazdy','J-PRAWA JAZDY','L: PRAWA JAZDY') then 'PRAWA JAZDY'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU') then '500+ z wykazaniem dochodu'
when g.NAZWAGRUPY in ('A-DOWODY OSOBISTE','DOW. OSOBISTE(SKŁ. DOK.)','Meldunki i dowody','M-MELDUNKI, DOWODY OSOBISTE','MELDUNKI - SKŁADANIE WNIOSKÓW') then 'Dowody osobiste'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU') then '500+ bez wykazania dochodu'
else 'inne' end as nazwasklasyfikowana,
g.CZASOBSLUGI,
g.LICZBAKLWKOLEJCE,
case when LENGTH(RTRIM(TRANSLATE(g.CZASOBSLUGI, '*', ' 0123456789'))) = 0  then g.CZASOBSLUGI else HOUR(TIME(g.CZASOBSLUGI)) * 60 + MINUTE(TIME(g.CZASOBSLUGI)) end as czasoczekiwania
from DASH7396.UMDATA u, DASH7396.UMDATA_PAYLOAD_RESULT_GRUPY g fetch first 28000000000 rows only


insert into DASH7396.UMDATAINFO select 'lp', u.PAYLOAD_UMNAME as um, u.PAYLOAD_RESULT_DATE as data, dayname(u.PAYLOAD_RESULT_DATE) as dzienTygodnia, u.PAYLOAD_RESULT_TIME as czas, g.NAZWAGRUPY as okienko,
case when g.NAZWAGRUPY in ('D-PRAWA JAZDY','PRAWA JAZDY','Prawa Jazdy','J-PRAWA JAZDY','L: PRAWA JAZDY') then 'PRAWA JAZDY'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU') then '500+ z wykazaniem dochodu'
when g.NAZWAGRUPY in ('A-DOWODY OSOBISTE','DOW. OSOBISTE(SKŁ. DOK.)','Meldunki i dowody','M-MELDUNKI, DOWODY OSOBISTE','MELDUNKI - SKŁADANIE WNIOSKÓW') then 'Dowody osobiste'
when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU') then '500+ bez wykazania dochodu'
else 'inne' end as nazwasklasyfikowana,
g.CZASOBSLUGI,
g.LICZBAKLWKOLEJCE,
case when LENGTH(RTRIM(TRANSLATE(g.CZASOBSLUGI, '*', ' 0123456789'))) = 0  then g.CZASOBSLUGI else HOUR(TIME(g.CZASOBSLUGI)) * 60 + MINUTE(TIME(g.CZASOBSLUGI)) end as czasoczekiwania
from DASH7396.UMDATA u, DASH7396.UMDATA_PAYLOAD_RESULT_GRUPY g where u.PAYLOAD_UMNAME in ('UD Bielany');


CREATE TABLE "UMDATAINFO"
(
  "lp" varchar(150),
  "um" VARCHAR(150),
 "data" VARCHAR(150),
"dzientygodnia" VARCHAR(150),
 "czas" VARCHAR(150),
 "okienko" VARCHAR(150),
 "nazwasklasyfikowana" VARCHAR(150),
 "czasobslugi" VARCHAR(150),
 "liczbawkolejce" VARCHAR(150),
 "czasoczekiwania" VARCHAR(150)
);


CREATE TABLE "UMDATAINFO_AVG"
(
  "um" VARCHAR(150),
  "dzientygodnia" VARCHAR(150),
  "godzina" VARCHAR(150),
  "nazwasklasyfikowana" VARCHAR(150),
 "sredniczasobslugi" VARCHAR(150)
);

insert into DASH7396.UMDATAINFO_AVG
  select um, dzienTygodnia as dzientygodnia, roundczas as godzina, nazwasklasyfikowana, avg(lacznyczasoczekiwania) as sredniczasobslugi
  from (
    select u.PAYLOAD_UMNAME as um,
    dayname(u.PAYLOAD_RESULT_DATE) as dzienTygodnia,
    -- u.PAYLOAD_RESULT_TIME as czas,
    (HOUR(TIME(u.PAYLOAD_RESULT_TIME))) as roundczas,
    case when g.NAZWAGRUPY in ('D-PRAWA JAZDY','PRAWA JAZDY','Prawa Jazdy','J-PRAWA JAZDY','L: PRAWA JAZDY') then 'PRAWA JAZDY'
    when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU') then '500+ z wykazaniem dochodu'
    when g.NAZWAGRUPY in ('A-DOWODY OSOBISTE','DOW. OSOBISTE(SKŁ. DOK.)','Meldunki i dowody','M-MELDUNKI, DOWODY OSOBISTE','MELDUNKI - SKŁADANIE WNIOSKÓW') then 'Dowody osobiste'
    when g.NAZWAGRUPY in ('Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU') then '500+ bez wykazania dochodu'
    else 'inne' end as NAZWASKLASYFIKOWANA,
    ( case when LENGTH(RTRIM(TRANSLATE(g.CZASOBSLUGI, '*', ' 0123456789'))) = 0  then g.CZASOBSLUGI*g.LICZBAKLWKOLEJCE else (HOUR(TIME(g.CZASOBSLUGI)) * 60 + MINUTE(TIME(g.CZASOBSLUGI)))*g.LICZBAKLWKOLEJCE end) as lacznyczasoczekiwania
    from DASH7396.UMDATA u, DASH7396.UMDATA_PAYLOAD_RESULT_GRUPY g
    where u.PAYLOAD_UMNAME = 'UD Bielany'
    and g.NAZWAGRUPY in
    ('D-PRAWA JAZDY','PRAWA JAZDY','Prawa Jazdy','J-PRAWA JAZDY','L: PRAWA JAZDY','Y-500+','500+',
    'Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+', 'MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU',
    'A-DOWODY OSOBISTE','DOW. OSOBISTE(SKŁ. DOK.)','Meldunki i dowody','M-MELDUNKI, DOWODY OSOBISTE',
    'MELDUNKI - SKŁADANIE WNIOSKÓW','Y-500+','500+','Program 500+ Al. Solidarności','Z: PUNKT PODAWCZY, 500+',
     'MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU') )
  group by (um, dzienTygodnia, roundczas, NAZWASKLASYFIKOWANA)
