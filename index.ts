export const WqueueStateWaitExam = 0;
export const WqueueStateInExam = 1;
export const WqueueStateWaitCashier = 2;
export const WqueueStateWaitDrug = 3;
export const WqueueStateWaitReExam = 4;
export const WqueueStateWaitAppoint = 5;

export const PharmaQueueStateWaitPack = 0;
export const PharmaQueueStateInPack   = 1;
export const PharmaQueueStatePackDone = 2;

export const DiseaseEndReasonNotEnded = "N";
export const DiseaseEndReasonCured = "C";
export const DiseaseEndReasonStopped = "S";
export const DiseaseEndReasonDead = "D";

export const DrugCategoryNaifuku = 0;
export const DrugCategoryTonpuku = 1;
export const DrugCategoryGaiyou  = 2;

export const ConductKindHikaChuusha = 0;
export const ConductKindJoumyakuChuusha = 1;
export const ConductKindOtherChuusha = 2;
export const ConductKindGazou = 3;

export const ZaikeiNaifuku = 1;
export const ZaikeiOther = 3;
export const ZaikeiChuusha = 4;
export const ZaikeiGaiyou = 6;
export const ZaikeiShikaYakuzai = 8;
export const ZaikeiShikaTokutei = 9;

export const SmallestPostfixShuushokugoCode = 8000;
export const LargestPostfixShuushookugoCode = 8999;

export const MeisaiSections = [
        "初・再診料", "医学管理等", "在宅医療", "検査", "画像診断",
        "投薬", "注射", "処置", "その他"       
    ];

export const SHUUKEI_SHOSHIN = "110";
export const SHUUKEI_SAISHIN_SAISHIN = "120";
export const SHUUKEI_SAISHIN_GAIRAIKANRI = "122";
export const SHUUKEI_SAISHIN_JIKANGAI = "123";
export const SHUUKEI_SAISHIN_KYUUJITSU = "124";
export const SHUUKEI_SAISHIN_SHINYA = "125";
export const SHUUKEI_SHIDO = "130";
export const SHUUKEI_ZAITAKU = "140";
export const SHUUKEI_TOYAKU_NAIFUKUTONPUKUCHOZAI = "210";
export const SHUUKEI_TOYAKU_GAIYOCHOZAI = "230";
export const SHUUKEI_TOYAKU_SHOHO = "250";
export const SHUUKEI_TOYAKU_MADOKU = "260";
export const SHUUKEI_TOYAKU_CHOKI = "270";
export const SHUUKEI_CHUSHA_SEIBUTSUETC = "300";
export const SHUUKEI_CHUSHA_HIKA = "311";
export const SHUUKEI_CHUSHA_JOMYAKU = "321";
export const SHUUKEI_CHUSHA_OTHERS = "331";
export const SHUUKEI_SHOCHI = "400";
export const SHUUKEI_SHUJUTSU_SHUJUTSU = "500";
export const SHUUKEI_SHUJUTSU_YUKETSU = "502";
export const SHUUKEI_MASUI = "540";
export const SHUUKEI_KENSA = "600";
export const SHUUKEI_GAZOSHINDAN = "700";
export const SHUUKEI_OTHERS = "800";

export const HOUKATSU_NONE = '00';
export const HOUKATSU_KETSUEKIKAGAKU = "01";
export const HOUKATSU_ENDOCRINE = "02";
export const HOUKATSU_HEPATITIS = "03";
export const HOUKATSU_TUMOR = "04";
export const HOUKATSU_TUMORMISC = "05";
export const HOUKATSU_COAGULO = "06";
export const HOUKATSU_AUTOANTIBODY = "07";
export const HOUKATSU_TOLERANCE = "08";
