// POTENTIAL VALUES FOR BRANDS
const brands = ['ABSORB', 'ADMETE', 'AGAM', 'AGEN', 'AGNARYD', 'AGNE', 'AINA', 'AKSDAL', 'AKURUM', 'AKUT', 'ALARM', 'ALEX', 'ALG', 'ALKALISK', 'ALLAK', 'ALLAMÅLA', 'ALSARP', 'ALSEDA', 'ALSTER', 'ALSVIK', 'ALVE', 'ALVINE', 'ALÄNG', 'AMALIA', 'AMON', 'AMORF', 'ANDREA', 'ANDRUP', 'ANDY', 'ANEBODA', 'ANEMON', 'ANITA', 'ANJA', 'ANNAMOA', 'ANNARS', 'ANNO', 'ANNONS', 'ANORDNA', 'ANRIK', 'ANSLUTA', 'ANSSI', 'ANTIFONI', 'ANTIK', 'ANTILOP', 'ANTONIUS', 'APA', 'APELSKÄR', 'ARHOLMA', 'ARILD', 'ARRAK', 'ARV', 'ARVINN', 'ASKER', 'ASPEKT', 'ASPELUND', 'ASPUDDEN', 'ASPVIK', 'ASTER', 'ASTRAKAN', 'ATNA', 'ATTEST', 'ATTITYD', 'AUKRA', 'BAGGE', 'BAGIS', 'BALK', 'BALSER', 'BAND', 'BAREN', 'BARNSLIG', 'BAROMETER', 'BASISK', 'BASTANT', 'BATIST', 'BEATA', 'BEDDINGE', 'BEHANDLA', 'BEHÖVD', 'BEKVÄM', 'BELLINGE', 'BENJAMIN', 'BENNO', 'BERGSBO', 'BERIT', 'BERNHARD', 'BERTA', 'BERTBY', 'BERTIL', 'BERYLL', 'BERÄTTA', 'BERÖM', 'BESKÅDA', 'BESTÅ', 'BETA', 'BEVARA', 'BIBBI', 'BIBY', 'BIGARRÅ', 'BIGUM', 'BILD', 'BILDAD', 'BILLSTA', 'BILLY', 'BISSA', 'BITIG', 'BJURSTA', 'BJURÖN', 'BJÄRNUM', 'BJÖRKEFALL', 'BJÖRKEN', 'BJÖRKUDDEN', 'BJÖRNHOLMEN', 'BLAD', 'BLADET', 'BLADHULT', 'BLANDA', 'BLANKEN', 'BLASKA', 'BLECKA', 'BLIMP', 'BLIXT', 'BLOCK', 'BLOM', 'BLOMMA', 'BLOMSTER', 'BLOMÖRT', 'BLOSSANDE', 'BLUNDA', 'BLÅSIPPA', 'BOALT', 'BOASJÖ', 'BOHOLMEN', 'BOLIDEN', 'BOLLÖ', 'BOLMEN', 'BOMULL', 'BONDIS', 'BONETT', 'BOREN', 'BORNHOLM', 'BORRBY', 'BORRIS', 'BOSSE', 'BOÅS', 'BRALLIS', 'BRANÄS', 'BRARUP', 'BRASA', 'BRAVERA', 'BRAVUR', 'BREDSKÄR', 'BRODER', 'BRODYR', 'BROMMÖ', 'BRUM', 'BRUNKRISSLA', 'BRYNE', 'BRÄDA', 'BULLAR', 'BUMERANG', 'BURKEN', 'BURS', 'BURSJÖN', 'BYGEL', 'BYGGA', 'BYHOLMA', 'BÅDALEN', 'BÅGVIK', 'BÅVEN', 'BÄRBAR', 'BÄRBY', 'BÄSTIS', 'BÖJA', 'BÖLSNÄS', 'BÖRJE', 'CALYPSO', 'CAPITA', 'CECILIA', 'CELEBER', 'CENTRERA', 'CESIUM', 'CHARM', 'CHARMÖR', 'CIRKEL', 'CLIPS', 'CYRIL', 'DACKE', 'DALFRED', 'DALSELV', 'DAMAST', 'DATA', 'DAVE', 'DECENNIUM', 'DEGERNES', 'DEKA', 'DEKAD', 'DELIKAT', 'DESSERT', 'DETOLF', 'DIGNITET', 'DILLING', 'DIMMA', 'DIMPA', 'DINERA', 'DIOD', 'DIODER', 'DIREKT', 'DISKA', 'DISKRET', 'DISTANS', 'DITO', 'DITTE', 'DIVISION', 'DJUR', 'DOCKSTA', 'DOFTA', 'DOKUMENT', 'DOLD', 'DOMSJÖ', 'DRAGAN', 'DRAGON', 'DRAGÖR', 'DRIBBLA', 'DRILL', 'DROPPAR', 'DROPS', 'DRYCKJOM', 'DRÄLLA', 'DRÖMMA', 'DRÖMMAR', 'DRÖNA', 'DUDERÖ', 'DUKTIG', 'DUTT', 'DVALA', 'DYGN', 'DYNING', 'DÅTID', 'DÄMPA', 'DÄNKA', 'EDGAR', 'EDIT', 'EDLAND', 'EDSVIK', 'EFFEKTIV', 'EGBY', 'EGEBY', 'EIDE', 'EINA', 'EKARP', 'EKBY', 'EKORRE', 'EKTORP', 'EKÅS', 'ELDIG', 'ELGÅ', 'ELIAS', 'ELISABET', 'ELLY', 'ELSFJORD', 'ELVERDAM', 'EMSEN', 'EMU', 'ENDIV', 'ENERGISK', 'ENGAN', 'ENGENES', 'ENGER', 'ENJE', 'ENSEMBLE', 'ENSEN', 'ENVIS', 'EPISTEL', 'EPOK', 'ERBIUM', 'ERFJORD', 'ERIK', 'ERIKSLUND', 'ERLING', 'ERSERUD', 'ERSLEV', 'EVABRITT', 'EVERT', 'EXKLUSIVT', 'EXPEDIT', 'FABIAN', 'FABLER', 'FADO', 'FAMNIG', 'FANAHOLM', 'FANSTA', 'FANTAST', 'FANTASTISK', 'FARTYG', 'FARUM', 'FAS', 'FASTBO', 'FATTBAR', 'FAVORIT', 'FEJKA', 'FEJÖ', 'FELICIA', 'FEMMEN', 'FENOMEN', 'FIALENA', 'FIBBE', 'FIDJETUN', 'FIGGJO', 'FIGUR', 'FIL', 'FILLSTA', 'FILT', 'FINLIR', 'FINNVIK', 'FINTORP', 'FIRA', 'FISK', 'FISKÖ', 'FIXA', 'FJORDGARD', 'FJÄDRAR', 'FJÄLLSTA', 'FLADDRA', 'FLAKSA', 'FLANÖR', 'FLATEN', 'FLIT', 'FLOKATI', 'FLOKENES', 'FLORA', 'FLORERA', 'FLORVÅG', 'FLORÖ', 'FLUKTA', 'FLYGEL', 'FLYN', 'FLYT', 'FLYTTA', 'FLÅREN', 'FLÄCKIG', 'FLÄNG', 'FLÄRKE', 'FLÄTA', 'FLÖRT', 'FNISS', 'FOLK', 'FONNES', 'FORM', 'FORMAT', 'FORSYTIA', 'FORSÅ', 'FOSSING', 'FOTO', 'FRAKTA', 'FRAMSTÅ', 'FRAMTID', 'FRANKLIN', 'FREDEN', 'FREDRIK', 'FREDRIKA', 'FROST', 'FROSTA', 'FRYKEN', 'FRÄCK', 'FRÄJEN', 'FRÖ', 'FUGA', 'FUSION', 'FYLLEN', 'FÅBORG', 'FÅNGST', 'FÅVANG', 'FÄRGGLAD', 'FÄRGRIK', 'FÄRM', 'FÖRHÖJA', 'FÖRNUFT', 'FÖRSIKTIG', 'FÖRVAR', 'GABBEH', 'GALANT', 'GALEJ', 'GASELL', 'GATTEN', 'GEDSER', 'GEMAK', 'GIDEÅ', 'GILBERT', 'GILDA', 'GIMÅN', 'GLANA', 'GLASHOLM', 'GLENN', 'GLES', 'GLIMMA', 'GLIMT', 'GLIS', 'GLITTER', 'GLOBAL', 'GLÄNSA', 'GLÄTTIG', 'GLÖDA', 'GNARP', 'GNISTRA', 'GODIS', 'GODMORGON', 'GOLIAT', 'GORM', 'GOSA', 'GOSIG', 'GRANAT', 'GRANEMO', 'GRANLIDEN', 'GRANÅS', 'GRAPEFRUKT', 'GRATINERA', 'GRAVYR', 'GREGOR', 'GREJ', 'GREVBÄCK', 'GRILLA', 'GRILLER', 'GRIMEN', 'GRIMLE', 'GRIMSTAD', 'GRIP', 'GRODA', 'GROGGY', 'GROLAND', 'GRUNDTAL', 'GRUNKA', 'GRYBY', 'GRÄNUM', 'GRÄS', 'GRÖNÖ', 'GULDLIN', 'GULLHOLMEN', 'GULLIVER', 'GULLUNGE', 'GUNILLA', 'GUNVOR', 'GURKÖRT', 'GUSTAV', 'GYLLEN', 'GYNNSAM', 'GÅNGBAR', 'GÅSGRUND', 'GÅVA', 'GÄSPA', 'GÖMMAREN', 'HAGALUND', 'HAGAVIK', 'HAKE', 'HALLARYD', 'HALOGEN', 'HALSTED', 'HAMNVIK', 'HAMPEN', 'HANNES', 'HARESTUA', 'HAROLA', 'HARRY', 'HASSEL', 'HATTEN', 'HAVBRO', 'HAVTORN', 'HEAT', 'HEDDA', 'HEDRA', 'HEIDAL', 'HEIMDAL', 'HEJKA', 'HELLUM', 'HELMER', 'HELSINGÖR', 'HEMLIS', 'HEMMA', 'HEMMET', 'HEMNES', 'HEMSJÖ', 'HENRIKSDAL', 'HENSVIK', 'HERAND', 'HERMAN', 'HERMELIN', 'HESSUM', 'HJARTDAL', 'HJELMÅS', 'HJUVIK', 'HJÄRTA', 'HJÖRDIS', 'HOB', 'HOJTA', 'HOO', 'HOPA', 'HOPEN', 'HOSLE', 'HOVEN', 'HOVET', 'HOVSKÄR', 'HOVÅS', 'HUGLO', 'HUGO', 'HULDA', 'HULINGEN', 'HULTET', 'HULTÖ', 'HUSNES', 'HUSVIK', 'HUSÅ', 'HUSÖN', 'HUTTEN', 'HYLLIS', 'HYTTAN', 'HÅBOL', 'HÅLLARE', 'HÅVA', 'HÄGG', 'HÄLSA', 'HÄSTVEDA', 'HÄSTÖ', 'HÖLLVIKEN', 'HÖRBY', 'IBESTAD', 'IDEAL', 'IDEALISK', 'IDELIG', 'IDGRUND', 'IDYLL', 'IKEA', 'ILSBO', 'IMPULS', 'INDEX', 'INDIRA', 'INDO', 'INEZ', 'INFO', 'INGEMAR', 'INGER', 'INGO', 'INGOLF', 'INLOPP', 'INNER', 'INREDA', 'INSATS', 'IRIS', 'IRJA', 'IRMA', 'ISDANS', 'ISKORN', 'ISTAD', 'IVAR', 'IVETOFTA', 'JABBA', 'JAKOB', 'JANNE', 'JANSJÖ', 'JANUARI', 'JAREN', 'JAVNAKER', 'JEFF', 'JERRIK', 'JESPER', 'JIGGA', 'JOAKIM', 'JOHAN', 'JOKER', 'JOKKMOKK', 'JONAS', 'JONDAL', 'JONISK', 'JONSBERG', 'JONSBO', 'JORUN', 'JUBILAR', 'JUBLA', 'JULES', 'JULIUS', 'JULROS', 'JYLLINGE', 'JÄGRA', 'JÄMSUNDA', 'JÄRLEBO', 'JÖKEL', 'KAFFE', 'KAJ', 'KAJSA', 'KAJSASTINA', 'KALAS', 'KALASET', 'KALLT', 'KAMFER', 'KAMRATER', 'KANIN', 'KANIST', 'KAPA', 'KARBY', 'KARDEMUMMA', 'KARENS', 'KARLSKRONA', 'KARLSTAD', 'KARLSÖ', 'KARSTEN', 'KASSETT', 'KASTANJ', 'KATTRUP', 'KATTUDDEN', 'KAUSTBY', 'KAVALKAD', 'KAXIG', 'KELIG', 'KETTY', 'KIBÄK', 'KILAN', 'KILBY', 'KIRP', 'KIVSTA', 'KLACK', 'KLADD', 'KLAPPSTA', 'KLAVIATUR', 'KLAVSTA', 'KLEMENS', 'KLINGSBO', 'KLIPPAN', 'KLIPPIG', 'KLOBO', 'KLOSS', 'KLUBBO', 'KLUDD', 'KLÄPPE', 'KLÄTT', 'KNAPPA', 'KNASTER', 'KNIPSA', 'KNODD', 'KNOPPA', 'KNUBBIG', 'KNUFF', 'KNYCK', 'KNÖS', 'KOJA', 'KOLDBY', 'KOLJA', 'KOLON', 'KOMISK', 'KOMMERS', 'KOMPISAR', 'KOMPLEMENT', 'KONCIS', 'KONST', 'KOPPANG', 'KORALL', 'KORPO', 'KORREKT', 'KORSFJORD', 'KORT', 'KOSING', 'KOTTAR', 'KOTTE', 'KOTTEBO', 'KRABB', 'KRAFTIG', 'KRAM', 'KRAMA', 'KRAMFORS', 'KRAMSNÖ', 'KRISTALLER', 'KRITTER', 'KROBY', 'KROKEN', 'KROKVIK', 'KRUS', 'KRYP', 'KRYSSBO', 'KRÄMARE', 'KULLA', 'KULLEN', 'KURA', 'KUVERT', 'KVARNSTEN', 'KVART', 'KVARTA', 'KVARTAL', 'KVIBY', 'KVINTETT', 'KVINTOL', 'KVISSEL', 'KVIST', 'KYLIGT', 'KÅRABODA', 'KÄRNA', 'KÖGE', 'LACK', 'LADDA', 'LADE', 'LAGAN', 'LAGRA', 'LAIVA', 'LAMPAN', 'LANNI', 'LANSA', 'LAUKVIK', 'LAVER', 'LAXEBY', 'LEGITIM', 'LEGYM', 'LEIRVIK', 'LEKA', 'LEKMAN', 'LEKPLATS', 'LEKSVIK', 'LEN', 'LENA', 'LENDA', 'LERAN', 'LERBERG', 'LERBÄCK', 'LERDAL', 'LERSTA', 'LEVANGER', 'LIARED', 'LIATORP', 'LIDAN', 'LILJA', 'LILL', 'LILLABO', 'LILLBERG', 'LILLEBY', 'LILLESAND', 'LILLHOLMEN', 'LILLÅKER', 'LILLÅNGEN', 'LIMMAREN', 'LINDMON', 'LINDSDAL', 'LINDVED', 'LINGO', 'LINJE', 'LINNARP', 'LJUDA', 'LJUNG', 'LJUSDAL', 'LJUSNAN', 'LJUSÅS', 'LJUV', 'LJUVLIG', 'LOCK', 'LOGGA', 'LOKKA', 'LONEVÅG', 'LOSSNEN', 'LOTS', 'LOVANDE', 'LOVIKEN', 'LUDDE', 'LUDVIG', 'LUFTIG', 'LUGN', 'LUMMIG', 'LUNS', 'LUNTA', 'LUPIN', 'LURÖY', 'LUSTIFIK', 'LUSY', 'LYCKA', 'LYCKHEM', 'LYCKSELE', 'LYDUM', 'LYFT', 'LYKTA', 'LYSTER', 'LÅGIS', 'LÄKT', 'LÄMPLIG', 'LÄTT', 'LÄTTSAM', 'LÖKÖ', 'LÖMSK', 'LÖV', 'LÖVA', 'MACKIS', 'MAGASIN', 'MAGGAN', 'MAGNIFIK', 'MAJBY', 'MAJKEN', 'MAJVOR', 'MALM', 'MALMA', 'MALOU', 'MALTE', 'MAMMUT', 'MANDAL', 'MANDEL', 'MANGER', 'MANNE', 'MAREN', 'MARGINAL', 'MARIEBERG', 'MARIUS', 'MARKLAND', 'MARKUS', 'MARKÖR', 'MARTIN', 'MATA', 'MATILDA', 'MATTEUS', 'MAVAS', 'MEDALJ', 'MEDALJONG', 'MELBU', 'MELDAL', 'MELLTORP', 'MELODI', 'MERETE', 'METALL', 'METRIK', 'MIEN', 'MIKAEL', 'MIL', 'MINDE', 'MINIFÅNGST', 'MINNA', 'MINNEN', 'MIX', 'MIXA', 'MIXTUR', 'MJÄLLBY', 'MJÖD', 'MJÖNÄS', 'MOLGER', 'MOLNIG', 'MONGSTAD', 'MOSES', 'MOSIPPA', 'MOSJÖ', 'MOTORP', 'MOTTO', 'MUDDUS', 'MULA', 'MUMSIG', 'MUSIK', 'MYDAL', 'MYKEN', 'MYS', 'MYSA', 'MYSKMALVA', 'MÅBÄR', 'MÅLA', 'MÅNSTAD', 'MÅSNAN', 'MÅTTLIG', 'MÄLARÖ', 'MÄRIT', 'MÖKERN', 'MÖRKER', 'MÖRRUM', 'NANDOR', 'NATT', 'NEGLINGE', 'NEJLIKA', 'NEKTARIN', 'NIDELVA', 'NILS', 'NISSE', 'NIVÅ', 'NJUTA', 'NOGA', 'NOJS', 'NOMINELL', 'NON', 'NORBO', 'NORDANÖ', 'NORDEN', 'NORDMYRA', 'NORESUND', 'NORNA', 'NORREBO', 'NORRESKOG', 'NORRSKEN', 'NORRSTEN', 'NORVALD', 'NOSTALGISK', 'NOT', 'NUMERÄR', 'NUTID', 'NYSTED', 'NYTTA', 'NYTTIG', 'NYTTJA', 'NÄCKTEN', 'NÄRA', 'NÄSBY', 'NÄSSJÖ', 'NÄSTVED', 'NÄSUM', 'NÄTT', 'NÖJE', 'OBI', 'OBSERVATÖR', 'ODDA', 'ODDVAR', 'OFELIA', 'OLARP', 'OLLE', 'OLUNDA', 'OMAR', 'OMSORG', 'OPTIMAL', 'ORDNING', 'ORE', 'ORGEL', 'ORKIDE', 'ORMO', 'ORRLÖT', 'ORÖD', 'OXEL', 'OXSKÄR', 'PAPAJA', 'PARAGRAF', 'PARK', 'PATRICIA', 'PATRIK', 'PATRULL', 'PAX', 'PELLO', 'PERSIKA', 'PERSISK', 'PETRONELLA', 'PILATORP', 'PINJE', 'PIRO', 'PJÄS', 'PJÄTTERYD', 'PLAN', 'PLANK', 'PLASTIS', 'PLATTA', 'PLINGA', 'PLUS', 'PLUTT', 'POKAL', 'POLARVIDE', 'POMP', 'PORTIS', 'POVEL', 'POÄNG', 'PRAKTFULL', 'PREMIÄR', 'PRESSA', 'PRESTERA', 'PRICKIG', 'PRODUKT', 'PROMPT', 'PROPER', 'PRUTA', 'PRÄGEL', 'PRÄKTIG', 'PRÖJS', 'PS', 'PUGG', 'PULT', 'PUNKT', 'PYRA', 'PYSSLA', 'PÅLITLIG', 'PÅTÅR', 'PÄLLBO', 'RABALDER', 'RADIUM', 'RAGNA', 'RAJTAN', 'RAKET', 'RAM', 'RAMVIK', 'RAND', 'RAPS', 'RARA', 'RARITET', 'RAST', 'RATIONELL', 'REBBENES', 'REDA', 'REDALEN', 'REDD', 'REGOLIT', 'REKO', 'REKTANGEL', 'RENLIG', 'RENS', 'RESA', 'RESLIG', 'RESURS', 'RETRÄTT', 'REXBO', 'RIBBA', 'RICKARD', 'RIGEL', 'RIGGA', 'RIKTIG', 'RILL', 'RINGSJÖN', 'RINGSKÄR', 'RINGUM', 'RIPE', 'RISTEN', 'RITVA', 'RIVAL', 'ROFYLLD', 'ROGER', 'ROSOR', 'ROTERA', 'RUDOLF', 'RUGGA', 'RULL', 'RUND', 'RUNDEL', 'RUSCH', 'RUSIG', 'RUSTIK', 'RUTA', 'RUTBO', 'RUTER', 'RUTGER', 'RÅÅN', 'RÄFFLA', 'RÄNDER', 'RÄNTA', 'RÄTTVIK', 'RÖNN', 'RÖNNBÄR', 'RÖNNSKÄR', 'RÖNÅS', 'RÖRA', 'SAGOLIK', 'SALBO', 'SALMI', 'SALONG', 'SALTSKÄR', 'SAMLA', 'SAMTID', 'SANELA', 'SANNI', 'SARALISA', 'SARITA', 'SATIN', 'SAXÅN', 'SEBASTIAN', 'SEKIN', 'SEMVIK', 'SENIOR', 'SIGNE', 'SIGNERA', 'SIGNUM', 'SIGRID', 'SILJAN', 'SINDAL', 'SIRLIG', 'SITTA', 'SJÖVIK', 'SKAFFA', 'SKALA', 'SKIMMER', 'SKIMRA', 'SKIR', 'SKOJ', 'SKOJIG', 'SKRAPA', 'SKRIBENT', 'SKRIN', 'SKRUVSTA', 'SKUBB', 'SKUGGIG', 'SKUTTA', 'SKYDD', 'SKYDDA', 'SKÅLIG', 'SKÄNKA', 'SKÄR', 'SKÖLDPADDA', 'SLABANG', 'SLINGA', 'SLIPAD', 'SLITBAR', 'SLOM', 'SLUGGER', 'SLUGIS', 'SLUMRA', 'SLÅN', 'SLÄTTEN', 'SLÄTTHULT', 'SMAKA', 'SMARTA', 'SMASKA', 'SMEDSTA', 'SMIDD', 'SMILA', 'SMYCKA', 'SMÅDAL', 'SMÅLAND', 'SMÄRT', 'SNACK', 'SNARKA', 'SNIGLAR', 'SNILLE', 'SNITSIG', 'SNITTA', 'SNODD', 'SNUDDA', 'SNURR', 'SNÅLIS', 'SNÅR', 'SNÄLL', 'SNÄRTIG', 'SNÖA', 'SNÖFLINGA', 'SNÖSTJÄRNA', 'SOCKERÄRT', 'SODA', 'SOFIA', 'SOL', 'SOLIG', 'SOLSTA', 'SOLVAR', 'SOLVEIG', 'SOMRIG', 'SORLA', 'SORTERA', 'SORTI', 'SOVA', 'SPALT', 'SPARKA', 'SPARSAM', 'SPEJA', 'SPOLING', 'SPONTAN', 'SPRALLIG', 'SPÄNN', 'SPÄRRA', 'SPÖKA', 'STABIL', 'STAVE', 'STEFAN', 'STEK', 'STEKA', 'STEN', 'STENSTORP', 'STIBY', 'STICKA', 'STIL', 'STJÄLK', 'STJÄRNA', 'STOCKHOLM', 'STOLMEN', 'STOPP', 'STORM', 'STORNÄS', 'STORÅ', 'STRATOSFÄR', 'STRECKET', 'STRIB', 'STRIKT', 'STRILA', 'STRIND', 'STRÅ', 'STRÅLANDE', 'STUGA', 'STYCKE', 'STÄLL', 'SULTAN', 'SUMMERA', 'SUNE', 'SUNNAN', 'SUPERFIN', 'SUSSA', 'SUVERÄN', 'SVAJS', 'SVALA', 'SVALKA', 'SVEJE', 'SVIND', 'SVINGA', 'SVIT', 'SY', 'SYLLING', 'SYNTES', 'SYREN', 'SÄTER', 'SÄVERN', 'SÖRLI', 'SÖRUM', 'TACKSAM', 'TAFJORD', 'TAG', 'TAJMA', 'TAJT', 'TALLVIK', 'TANJA', 'TASSA', 'TECKEN', 'TEKLA', 'TEPPAS', 'TERJE', 'TERMOSFÄR', 'TERTIAL', 'TEXTUR', 'THISTED', 'TIDLÖSA', 'TILLAGA', 'TINDRA', 'TISTEL', 'TITTA', 'TJUSIG', 'TJÖME', 'TOBIAS', 'TOBO', 'TOFTBO', 'TOGA', 'TOKIG', 'TOLG', 'TOLGA', 'TORBJÖRN', 'TORKA', 'TORSBY', 'TOSTARP', 'TRAKTOR', 'TRAMPA', 'TRANBY', 'TRANDAL', 'TRATT', 'TRENSUM', 'TRILLING', 'TRIPP', 'TRIVSAM', 'TRIVSEL', 'TROFAST', 'TROJKA', 'TROLIG', 'TROLLFJORDEN', 'TROLLSTA', 'TROLSK', 'TROMSNES', 'TROMSÖ', 'TRONDHEIM', 'TRONES', 'TROSS', 'TRULS', 'TRYGG', 'TRYTA', 'TRÄD', 'TULLERÖ', 'TULLSTA', 'TULPAN', 'TUNDRA', 'TUPPLUR', 'TVEIT', 'TVILLING', 'TVÄTTA', 'TYDA', 'TYGLÖSA', 'TYLÖSAND', 'TÅRNBY', 'TÅRSTA', 'TÄLJARE', 'TÄRNAN', 'TÄRNÖ', 'ULDUM', 'ULSBERG', 'UNG', 'UNNI', 'UPPENBAR', 'UPPLEVA', 'UPPTÄCKA', 'URBAN', 'USTA', 'UTBY', 'UTMÄRKT', 'UVÅS', 'VACKER', 'VAKEN', 'VALBY', 'VALSUND', 'VANVIK', 'VARIERA', 'VARSAM', 'VASEN', 'VASS', 'VEJMON', 'VERKLIG', 'VERKSAM', 'VERSAL', 'VESSLA', 'VETE', 'VIDE', 'VIKA', 'VIKARE', 'VIKIS', 'VILA', 'VILDBÄR', 'VILSE', 'VILSHULT', 'VINDE', 'VINJETT', 'VINK', 'VINNA', 'VINSTRA', 'VIPPA', 'VIREN', 'VIRRE', 'VISEN', 'VISTOFTA', 'VITAMIN', 'VITAMINER', 'VITSKÄR', 'VITTEN', 'VIVAN', 'VOLYM', 'VRETA', 'VRETEN', 'VURM', 'VÅG', 'VÅGEN', 'VÅLLÖ', 'VÅRLJUNG', 'VÄDD', 'VÄGGIS', 'VÄGHULT', 'VÄNLIG', 'VÄNNA', 'VÄRDE', 'VÄRLD', 'VÄRME', 'VÄV', 'VÄXT', 'WILMA', 'YNGSJÖ', 'YSBY', 'YTTERLIG', 'ZITA', 'ÅDAL', 'ÅNES', 'ÅNN', 'ÅRLIG', 'ÅRSTID', 'ÅSARP', 'ÅSELE', 'ÅSUNDEN', 'ÄLMHULT', 'ÄNGA', 'ÄPPLARÖ', 'ÄRBAR', 'ÄTRAN', 'ÖDMJUK', 'ÖGLA', 'ÖNSKA', 'ÖPPEN', 'ÖRESUND', 'ÖRTER', 'ÖSTERBYMO', 'ÖSTERÖ'];
// POTENTIAL VALUES FOR CATEGORIES
const categories = ['Sofa', 'Ottoman', 'Bed', 'Bed frame', 'Table', 'Dining table', 'Nightstand', 'Coffee table', 'High chair', 'Desk chair', 'Bar stool', 'Pillow', 'Blanket', 'Cushion', 'Bedspread', 'Mattress', 'Comforter', 'Chest of drawers', 'TV bench', 'Corner wardrobe', 'Mirrored wardrobe', 'Walk in wardrobe', 'Wall art', 'Poster', 'Picture frame', 'Plant', 'Artificial plant', 'Vase', 'Bowl', 'Plate', 'Alarm clock', 'Wall clock', 'Cabinet', 'Shelf unit', 'LED light', 'Ceiling light', 'Wall lamp', 'Floor lamp', 'Spotlight', 'Table lamp', 'Bathroom lighting', 'Frying pan', 'Wok', 'Pot', 'Saucepan', 'Mixing bowl', 'Measuring cups', 'Baking pan', 'Cookie sheet', 'Storage container', 'Crib', 'Mirror', 'Rug', 'Door mat', 'Bath mat', 'Pet bed', 'Litter tray', 'Scratching post', 'Tray', 'Knob', 'Handle', 'Dust pan', 'Broom', 'Sponge', 'Spatula', 'Knife', 'Chopping board'];
// POTENTIAL VALUES FOR COLORS
const colors = ['violet', 'almond', 'green', 'gray', 'black', 'brown', 'black-brown', 'white', 'light blue', 'yellow', 'red', 'turquoise', 'powder', 'pink', 'orange', 'purple', 'eggshell', 'gold', 'silver', 'dark blue', 'olive', 'crimson', 'copper'];
// POTENTIAL VALUES FOR PRICES
const prices = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54, 54.5, 55, 55.5, 56, 56.5, 57, 57.5, 58, 58.5, 59, 59.5, 60, 60.5, 61, 61.5, 62, 62.5, 63, 63.5, 64, 64.5, 65, 65.5, 66, 66.5, 67, 67.5, 68, 68.5, 69, 69.5, 70, 70.5, 71, 71.5, 72, 72.5, 73, 73.5, 74, 74.5, 75, 75.5, 76, 76.5, 77, 77.5, 78, 78.5, 79, 79.5, 80, 80.5, 81, 81.5, 82, 82.5, 83, 83.5, 84, 84.5, 85, 85.5, 86, 86.5, 87, 87.5, 88, 88.5, 89, 89.5, 90, 90.5, 91, 91.5, 92, 92.5, 93, 93.5, 94, 94.5, 95, 95.5, 96, 96.5, 97, 97.5, 98, 98.5, 99, 99.5, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195];

var randomBrand = function() {
  return brands[Math.floor(Math.random() * brands.length)];
};

var randomCategory = function() {
  return categories[Math.floor(Math.random() * categories.length)];
};

var randomColor = function() {
  return colors[Math.floor(Math.random() * colors.length)];
};

var randomPrice = function() {
  return prices[Math.floor(Math.random() * prices.length)];
};

var randomValueNewProduct = function() {
  // 20% probability of getting true; new product 20% of the time
  return (Math.random() < 0.2);
};

var randomValueProductAvailable = function() {
  // 95% probability of getting true; in stock 95% of the time
  return (Math.random() < 0.95);
};

var randomLinkedColors = function(productId) {
  let linkedColors = [];
  // 30% probability of getting true; linked colors 30% of the time
  if (Math.random() < 0.3) {
    // random number between 2 - 5
    let numberOfColors = Math.floor(Math.random() * 4) + 2;
    linkedColors.push(productId);
    while (linkedColors.length < numberOfColors) {
      let randomId = Math.floor(Math.random() * 100) + 1;
      if (linkedColors.indexOf(randomId) === -1) {
        linkedColors.push(randomId);
      }
    }
  }
  return linkedColors;
};

var randomLinkedSizes = function(productId) {
  let linkedSizes = [];
  // 15% probability of getting true; linked zies 15% of the time
  if (Math.random() < 0.15) {
    // random number between 2 - 4
    let numberOfSizes = Math.floor(Math.random() * 3) + 2;
    linkedSizes.push(productId);
    while (linkedSizes.length < numberOfSizes) {
      let randomId = Math.floor(Math.random() * 100) + 1;
      if (linkedSizes.indexOf(randomId) === -1) {
        linkedSizes.push(randomId);
      }
    }
  }
  return linkedSizes;
};

var generateRandomEntry = function(productId) {
  let object = {
    _id: productId,
    brand: randomBrand(),
    category: randomCategory(),
    color: randomColor(),
    price: randomPrice(),
    newProduct: randomValueNewProduct(),
    productAvailable: randomValueProductAvailable(),
    linkedColors: randomLinkedColors(productId),
    linkedSizes: randomLinkedSizes(productId)
  };

  return object;
};

var generateRandomEntries = function() {
  let entries = [];
  for (let i = 1; i <= 100; i++) {
    entries.push(generateRandomEntry(i));
  }
  return entries;
};

module.exports = {
  generateRandomEntries,
  generateRandomEntry,
  randomLinkedSizes,
  randomLinkedColors,
  randomValueProductAvailable,
  randomValueNewProduct,
  randomPrice,
  randomColor,
  randomCategory,
  randomBrand,
  prices,
  colors,
  categories,
  brands
};