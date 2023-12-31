/*
 Navicat Premium Data Transfer

 Source Server         : javaee礼拜二
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : xinwenjuhe

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 23/12/2023 22:33:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for aboutus
-- ----------------------------
DROP TABLE IF EXISTS `aboutus`;
CREATE TABLE `aboutus`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `subtitle` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '副标题',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  `picture1` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片1',
  `picture2` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片2',
  `picture3` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片3',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '关于我们' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of aboutus
-- ----------------------------
INSERT INTO `aboutus` VALUES (1, '2023-12-13 21:46:01', '关于我们', 'ABOUT US', '<p><span style=\"color: rgb(55, 65, 81);\">欢迎来到我们的新闻聚合App，一个致力于为用户提供全面、实时、个性化新闻体验的平台。我们的使命是通过整合丰富多元的新闻资源，借助先进的技术和智能算法，为用户打造一个便捷、个性化的新闻阅读空间。我们相信信息的分享和传递可以架起人与世界之间的桥梁，使用户能够更深入地了解世界各地的时事动态。我们的团队由一群对信息传播充满热情的专业人士组成，拥有丰富的技术开发和新闻行业经验。我们相信通过团队的协作与努力，我们能够不断提升产品质量，为用户提供更出色的服务。如果您有任何关于新闻聚合App的建议、意见或合作意向，欢迎随时与我们联系。我们重视用户反馈，将不断优化产品以满足您的期望。</span></p>', 'upload/25-1702908172398.jpg', 'upload/24-1702908039576.png', 'upload/23-1702908175725.jpg');

-- ----------------------------
-- Table structure for address
-- --------------------------

-- ----------------------------
-- Records of address
-- ----------------------------
-- ----------------------------
-- Table structure for caogaoxiang
-- ----------------------------
DROP TABLE IF EXISTS `caogaoxiang`;
CREATE TABLE `caogaoxiang`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `caogaobianhao` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '草稿编号',
  `biaoti` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `xinwenfenlei` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '新闻分类',
  `tupian` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片',
  `xinwengaiyao` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '新闻概要',
  `shifariqi` date NULL DEFAULT NULL COMMENT '事发日期',
  `shifadidian` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '事发地点',
  `xinwenxiangqing` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '新闻详情',
  `cunrushijian` date NULL DEFAULT NULL COMMENT '存入时间',
  `thumbsupnum` int(11) NULL DEFAULT 0 COMMENT '赞',
  `crazilynum` int(11) NULL DEFAULT 0 COMMENT '踩',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `caogaobianhao`(`caogaobianhao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '草稿箱' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of caogaoxiang
-- ----------------------------
INSERT INTO `caogaoxiang` VALUES (50, '2023-12-18 20:12:55', '1702901568683', '津美书院揭牌成立 “艺术国家队”入驻天津美术学院', '教育', 'upload/7-1702901385152.jpg,upload/8-1702901388825.jpg', '天津12月18日电 (刘俊苍)12月18日，天津美术学院津美书院正式成立并举行揭牌仪式', '2023-12-18', '天津', '<p>书院最早出现在唐代，有如皇家图书馆，当时设立了丽正书院和集贤殿书院，成为汇聚文人学者的一种重要教育组织形式，在中国历史上形成了一种独具特色的教育制度。历史上如白鹿洞、岳麓、嵩阳等书院都为当时的学术中心，是文化传承、教育发展和思想交流的重要场所。</p><p>天津美术学院院长贾广健表示，“书院制”教育模式与天津美院中国画传统的“寓入室与学院教育为一体的教学模式”相契合。20世纪60年代，天津美院中国画专业通过该教学模式培养出了杨德树、白庚延、吕云所、陈冬至等一批优秀的艺术家和教学师资。因此，成立津美书院既是对天津美院传统教育模式的延展，也是新时代培养拔尖创新人才的时代需要。</p><p>津美书院是天津美术学院新成立的二级教学单位，教学团队由校内外各个专业领域的领军人物组成。书院以“融汇古今、中西兼容、开拓创新”的开放式教育模式，强调跨学科学习，完善具有天津美院特色、创新高水平的美术学科人才培养体系，致力于为新时代培养具有思辨性思维与创新能力的，能勇攀艺术高峰并推动我国文化艺术发展的美术拔尖人才。</p>', '2023-12-18', 0, 0);

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '配置文件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES (1, 'picture1', 'upload/15-1702906452650.jpg');
INSERT INTO `config` VALUES (2, 'picture2', 'upload/16-1702906466310.jpg');
INSERT INTO `config` VALUES (3, 'picture3', 'upload/17-1702906486019.jpg');

-- ----------------------------
-- Table structure for discussjinrixinwen
-- ----------------------------
DROP TABLE IF EXISTS `discussjinrixinwen`;
CREATE TABLE `discussjinrixinwen`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `avatarurl` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '头像',
  `nickname` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `reply` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回复内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '今日新闻评论表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of discussjinrixinwen
-- ----------------------------
INSERT INTO `discussjinrixinwen` VALUES (1, '2023-12-14 16:57:09', 31, 1, 'upload/yonghu_touxiang8.jpg', '用户账号8', '123', '');

-- ----------------------------
-- Table structure for jinrixinwen
-- ----------------------------
DROP TABLE IF EXISTS `jinrixinwen`;
CREATE TABLE `jinrixinwen`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `biaoti` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `xinwenfenlei` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '新闻分类',
  `tupian` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片',
  `xinwengaiyao` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '新闻概要',
  `shifariqi` date NULL DEFAULT NULL COMMENT '事发日期',
  `xiangguanshipin` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '相关视频',
  `shifadidian` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '事发地点',
  `fabushijian` date NULL DEFAULT NULL COMMENT '发布时间',
  `xinwenxiangqing` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '新闻详情',
  `thumbsupnum` int(11) NULL DEFAULT 0 COMMENT '赞',
  `crazilynum` int(11) NULL DEFAULT 0 COMMENT '踩',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '今日新闻' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jinrixinwen
-- ----------------------------
INSERT INTO `jinrixinwen` VALUES (39, '2023-12-18 20:00:22', '大陆美食在台湾掀起热潮 国台办回应', '美食', 'upload/2-1702900787152.jpg', '近期台湾街头出现了不少售卖酸菜鱼的餐馆，民众排起长队，非常的火爆。', '2023-12-02', '', '', '2023-12-18', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">对此，国务院台办发言人朱凤莲表示，说到酸菜鱼，前一阵子我刚刚“解锁”酸菜鱼的做法，这确实是一道很有内容、很有成就感的美食。我知道，台湾有很好的乌鱼、石斑鱼、鲈鱼，相信用来做酸菜鱼味道会很不错，也很适合冬天吃。之前台湾的珍珠奶茶、卤肉饭、炸鸡排在大陆很受欢迎，现在大陆的螺蛳粉、梅花糕、酸菜鱼、椰子鸡在台湾掀起一波又一波“美食热”，充分说明两岸同文同种、同风同俗，有一样的美食爱好，一样的文化品味。欢迎更多的台湾同胞参与到发现美食、发现美好的交流中来，也欢迎更多的台湾朋友到大陆来走走看看，打卡更多地方美食，品尝更多地方特产。</span></p>', 0, 0);
INSERT INTO `jinrixinwen` VALUES (40, '2023-12-18 20:01:20', '辽宁省人大教育科学文化卫生委员会原副主任委员上官炜星被开除党籍', '教育', 'upload/3-1702901147900.jpg', '据辽宁省纪委监委消息：日前，经辽宁省委批准，辽宁省纪委监委对辽宁省人大教育科学文化卫生委员会原副主任委员上官炜星严重违纪违法问题进行了立案审查调查。', '2023-12-01', '', '辽宁', '2023-12-18', '<p>经查，上官炜星丧失理想信念，背弃初心使命，无视中央八项规定精神，违规收受财物；违反组织原则，在组织谈话时不如实说明问题，在职工录用工作中为他人谋取利益；违规为他人在获取薪酬方面谋取利益；纪法底线失守，利用职务上的便利，为他人在推进项目、承揽工程等方面谋取利益，非法收受他人财物。</p><p>上官炜星严重违反党的组织纪律、廉洁纪律、生活纪律，构成严重职务违法并涉嫌受贿犯罪，且在党的十八大后不收敛、不收手，性质严重，影响恶劣，应予严肃处理。依据《中国共产党纪律处分条例》《中华人民共和国监察法》《中华人民共和国公职人员政务处分法》等有关规定，经辽宁省纪委常委会会议研究并报辽宁省委批准，决定给予上官炜星开除党籍处分；按规定取消其享受的待遇；收缴其违纪违法所得；将其涉嫌犯罪问题移送检察机关依法审查起诉，所涉财物一并移送。</p>', 0, 0);
INSERT INTO `jinrixinwen` VALUES (41, '2023-12-18 20:08:30', '携手国际知名艺术家 浙江音乐学院自制歌剧《爱之甘醇》上演', '音乐', 'upload/4-1702901230703.jpg,upload/5-1702901235265.jpg,upload/6-1702901240259.jpg', '杭州12月18日携手多位国际知名艺术家，浙江音乐学院自制歌剧《爱之甘醇》日前亮相浙江音乐学院大剧院的舞台。', '2023-10-18', '', '浙江', '2023-12-18', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">此次演出由著名旅意女高音歌唱家、国际顶级歌剧赛事六项金奖获得者孙秀苇担任艺术总监，著名意大利歌剧导演皮埃尔·弗朗切斯科·马埃斯特里尼担任导演，意大利指挥家安德里亚·阿尔伯丁执棒，世界顶尖钢琴家及歌剧艺术指导罗曼·克鲁莫夫担任艺术指导。</span>浙江音乐学院版《爱之甘醇》淋漓尽致地展现出浓郁的意式风情，精彩的呈现源于多位意大利国际名家和国内实力主创的精心制作。</p><p>“今年上半年，我们曾和马埃斯特里尼导演还有阿尔伯丁指挥，为学生们排演过音乐会版歌剧《唐·帕斯夸莱》《丑角》。这回真正登上歌剧院的舞台，是一次更为全面的展示，因此，这部作品在创排时也打磨得更加仔细。”浙江音乐学院歌剧学院艺术总监孙秀苇介绍，导演马埃斯特里尼对整部作品的每一处细节都了熟于心，在排练时不仅会为学生一遍遍耐心讲解，而且所有的示范都是亲自演唱，“导演在这部剧里巧妙地融入了许多诙谐幽默的元素。”</p><p>在音乐设计上，这部作品不乏可圈可点之处。作为歌剧艺术指导的国际顶尖钢琴家罗曼还以即兴钢琴的方式，为整部剧注入了音乐灵魂，瓦格纳的《婚礼进行曲》、李斯特的《爱之梦》、肖邦的《安魂曲》等诸多经典名曲都是隐藏剧中的“彩蛋”，为这部以爱情为主题的清新歌剧增添了几分梦幻气息。<span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">对于浙江音乐学院歌剧学院来说，歌剧《爱的甘醇》是一片理想的实验场。作为歌剧舞台上难度极高的作品，《爱之甘醇》包含了独唱、二重唱、合唱等多种演唱形式，对演员的功力有着非常高的要求。“练好这部作品，学生们的演唱水平会提升一个台阶。”孙秀苇说。</span>据介绍，三年前，浙江音乐学院成立了乐队学院、民族乐队学院、歌剧学院、室内乐学院以及合唱学院“五大学院”，据介绍，“五大学院”既是“本科后”的继续教育机制，又是在本科与研究生培养方案的基础上建立的以适应“职业化”要求的高阶方案，以此为行业单位输送成熟的专业人才，解决长期存在的艺术人才供需链在“最后一公里”脱节的问题。</p><p>此次歌剧演出，即是“使舞台成为教室”的生动实践。“制作一部歌剧并非易事，在学生阶段排演歌剧，并邀请国际一流主创团队保驾护航更是难得。”孙秀苇介绍，通过歌剧的创排和演出，教学与实训相结合，大大提升了学生们的综合舞台表演能力和专业素养。</p><p>之所以选择制作歌剧《爱之甘醇》，孙秀苇还有另一重考虑，“这是一部很有个性的作品。”多尼采蒂的这部喜歌剧本身就充满了喜感，加之导演充满创意的处理手法，需要演员用夸张灵动的表演，来把人物塑造的活灵活现。“对学生们来说，这次在戏剧性上也是一大挑战，一位出色的歌剧演员不仅要唱得好，更要演得好。”</p>', 0, 0);
INSERT INTO `jinrixinwen` VALUES (42, '2023-12-18 20:10:12', '津美书院揭牌成立 “艺术国家队”入驻天津美术学院', '教育', 'upload/7-1702901385152.jpg,upload/8-1702901388825.jpg', '天津12月18日电 (刘俊苍)12月18日，天津美术学院津美书院正式成立并举行揭牌仪式', '2023-12-18', '', '天津', '2023-12-18', '<p>书院最早出现在唐代，有如皇家图书馆，当时设立了丽正书院和集贤殿书院，成为汇聚文人学者的一种重要教育组织形式，在中国历史上形成了一种独具特色的教育制度。历史上如白鹿洞、岳麓、嵩阳等书院都为当时的学术中心，是文化传承、教育发展和思想交流的重要场所。</p><p>天津美术学院院长贾广健表示，“书院制”教育模式与天津美院中国画传统的“寓入室与学院教育为一体的教学模式”相契合。20世纪60年代，天津美院中国画专业通过该教学模式培养出了杨德树、白庚延、吕云所、陈冬至等一批优秀的艺术家和教学师资。因此，成立津美书院既是对天津美院传统教育模式的延展，也是新时代培养拔尖创新人才的时代需要。</p><p>津美书院是天津美术学院新成立的二级教学单位，教学团队由校内外各个专业领域的领军人物组成。书院以“融汇古今、中西兼容、开拓创新”的开放式教育模式，强调跨学科学习，完善具有天津美院特色、创新高水平的美术学科人才培养体系，致力于为新时代培养具有思辨性思维与创新能力的，能勇攀艺术高峰并推动我国文化艺术发展的美术拔尖人才。</p>', 0, 0);
INSERT INTO `jinrixinwen` VALUES (43, '2023-12-18 21:36:34', '伊拉克举行省级议会选举', '国际', 'upload/18-1702906660021.jpg', '新华社巴格达12月18日电（记者李军 董亚雷）18日，伊拉克在全国除库尔德自治区3省以外的15个省举行省级议会选举投票。', '2023-12-18', '', '伊拉克', '2023-12-18', '<p>投票于当地时间7时开始，预定于当天18时结束。约1600万选民可在15个省的7166个投票站投票，将从5901名候选人中选出285名省级议会议员。</p><p>伊拉克独立高等选举委员会数据显示，在16日为伊安全部门人员和流离失所者组织的提前投票中，超过105万选民中有逾70万人进行了投票，投票率约为67%。</p>', 0, 0);

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `introduction` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '简介',
  `picture` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 75 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '公告信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (69, '2023-12-18 21:15:29', '12月15日-16日，操作系统大会 & openEuler Summit 2023在这里举行。', '来自国内外软件行业的从业者见证了openEuler开源社区发展的最新成果和东方通等企业、机构参与社区建设的热情与活力。\n  这个引入著名数学家欧拉姓名的开源社区由华为等龙头企业带头贡献出大量源代码而创建。', 'upload/9-1702905296400.jpg', '<p>openEuler社区瞄准操作系统产业生态，汇聚了该领域的众多国内外企业及相关伙伴。在开源工作者的共同努力下，openEuler社区目前已吸引1300多家头部企业、研究机构和高校加入，汇聚16800多名开源贡献者，成立100多个特别兴趣小组（SIG），通过深化开源社区协作以及联合创新的方式，不断推出创新特性并融入稳定迭代的社区发行版本，提升了基础软件的创新能力。</p><p>最新数据显示，openEuler系累计装机量超过610万套。据IDC预测，2023年openEuler系在国内服务器操作系统市场份额达到36.8%，成为市场份额第一。开源四年，openEuler实现了跨越式发展，并在技术创新、生态发展、社区合作、商业落地上建立了完善的发展体系，形成了产业正循环。</p><p>大会期间，东方通等企业、机构与开放原子开源基金会openEuler社区签订项目群捐赠意向。东方通捐赠轻舟Web管理软件开发平台、云翼数据缓存中间件云原生管理平台两个项目，同时，发布基于BishengJDK的TongJDK商用产品，助力繁荣基础软件生态。</p><p>中国工程院院士倪光南表示，东方通捐赠展示了国内中间件厂商自主创新的能力和信心。东方通是中间件领域的龙头企业，具有很大的行业影响力，积极拥抱开源，将有力推动商用中间件产业化落地的能力，并推动开源社区的商业化发展。</p>');
INSERT INTO `news` VALUES (70, '2023-12-18 21:18:33', '中国电信成立空间计算产业生态联盟，加速虚拟现实产业融合发展', '为加速5G+空间计算领域的政产学研用深度融合，推动天翼云图科技创新、产品领先及产业规模推广，持续打造国内领先的数字空间运营商，近日，在2023数字科技生态大会数智渠道新生态合作论坛中中国电信正式成立天翼云图空间计算产业生态联盟。', 'upload/10-1702905488939.jpg', '<p>	中国电信联合清华大学、北京邮电大学、中国信通院、虚拟现实与元宇宙产业联盟、国家虚拟现实创新中心、中兴、华为、商汤科技、ROKID、PICO、易现科技、计算美学等科技产业生态伙伴共同成立“天翼云图空间计算产业生态联盟”。清华大学美术学院党委副书记吴琼教授、北京邮电大学信息化技术中心副主任、网络与交换技术国家重点实验室乔秀全教授、中国电信集团市场部副总经理邵琰涛、政企信息服务事业群副总经理丛林林、全渠道运营中心总经理助理魏丫丫、中电万维总经理马国祖及国内头部虚拟现实及空间计算科技公司领军人共同 宣布天翼云图空间计算产业生态联盟成立。	下一步，中国电信天翼云图空间计算产业生态联盟将持续推动产学研深度合作，依托国家重点专项虚拟现实融合应用创新公共服务平台，推进产业生态融通互促及跨领域行业应用合作。联合高等院校及国家创新中心等开展核心技术攻关和标准制定，推动空间计算相关标准体系完善。持续加大空间计算关键技术研发投入，提升与大数据、新一代信息通信等融合发展水平，构建“一图一商一融合”新模式，持续提升“AR商业地图+AI智能海报+MR数字中庭”融合应用能力，助力中国电信打造领先的数字空间运营商，引领空间计算新时代！</p>');
INSERT INTO `news` VALUES (71, '2023-12-18 21:20:00', '广西贺州供港蔬菜实现“直通直销”', '　新华社南宁12月18日电（记者汪奇文、杨驰）18日，广西贺州市供港蔬菜“双牌”货车直通首发仪式在钟山县举行，标志着广西供港蔬菜销售方式由“中间销售”向“直通直销”转变，实现“菜园子”直通“菜篮子”。', 'upload/11-1702905583492.jpg', '<p>南宁海关通过与深圳海关签订《关于加强供港蔬菜检验检疫监管合作备忘录》，建立产地海关与口岸海关联合监管新模式，保障蔬菜安全、高效直通供港，实现产地与口岸的无缝对接、当天发当天达，支持更多内地优质农食产品出口香港。</p><p>香港特区政府驻广西联络处主任王卓然表示，通过该直通模式，贺州市供港蔬菜运输时间可压缩约40%，运输成本可节省约30%，既可以降低供港蔬菜的成本，又可增加蔬菜的保鲜度。</p><p>目前，广西供港蔬菜备案种植基地共30家，其中贺州18家，备案种植面积3.76万亩，产能11.3万吨/年。</p>');
INSERT INTO `news` VALUES (72, '2023-12-18 21:21:34', '数读中国这十年丨粮食产量连年稳定在1.3万亿斤以上 中国饭碗牢牢端在自己手上', '年终岁末，回望2023年，在党中央、国务院坚强领导下，各地区各部门持续加大粮食生产支持力度，有力克服黄淮罕见“烂场雨”、华北东北局地严重洪涝等不利因素影响，全年粮食生产再迎丰收，比上年增加177.6亿斤。', 'upload/12-1702905664220.jpg', '<p>丰收来之不易。今年各地贯彻落实粮食安全党政同责，调整优化种植结构，积极推进间套复种。农业农村部开展粮油等主要作物大面积单产提升行动，推广耐密品种，集成配套栽培技术。农技人员深入一线指导落实防灾减灾关键措施。</p><p>尽管华北东北部分地区发生洪涝灾害，但全国大部农区光温水匹配较好，气象条件总体有利于粮食作物生长发育和产量形成。国家统计局数据显示，全国粮食总产量13908.2亿斤，比上年增加177.6亿斤。我国粮食生产连年丰收，2023年连续9年稳定在1.3万亿斤以上。从满足量到提升质，绿色兴农、质量兴农，完善产业链条，树立大食物观……党的十八大以来，粮食安全向更高层次跃升，高质量供给体系加快建设。</p><p>以占世界9%的耕地、6%的淡水资源养育了世界近1/5的人口，坚持产量产能一起抓、数量质量一起抓、生产生态一起抓……事实证明，中国人不仅能够依靠自己解决吃饭问题，而且有能力把14亿多人的饭碗端得更牢更好。</p><p>把牢粮食安全主动权，才能把稳强国复兴主动权。</p><p>近年来，粮食需求刚性增长，世界粮食市场不确定性明显增加。我国深入实施藏粮于地、藏粮于技战略，抓紧耕地和种子两个要害，加快提升粮食产能。截至2022年底，我国已累计建成10亿亩高标准农田，稳定保障了1万亿斤以上的粮食产能。</p>');
INSERT INTO `news` VALUES (73, '2023-12-18 21:26:04', '第40次南极考察', '中国第39次、40次南极考察长城站越冬队完成交接', 'upload/13-1702905929285.jpg', '<p>新华社“雪龙2”号12月18日电（记者周圆）当地时间12月18日上午，中国第40次和第39次南极考察长城站越冬队在长城站完成交接工作。</p><p>中国第40次南极考察长城站越冬队于12月11日从上海乘机出发，途经法国巴黎、智利圣地亚哥等地机场，最后在智利彭塔搭乘南极洲际航班，于15日下午到达位于乔治王岛的长城站。</p><p>中国第40次南极考察长城站站长王建忠介绍，队员们到达长城站后，立刻与中国第39次南极考察长城站越冬队队员面对面进行交接。正式完成交接后，第40次越冬队将全面负责长城站的考察工作。</p><p>据悉，本次长城站越冬队是2019年以来，我国首次大规模搭乘国际航班和南极洲际航班飞往南极的越冬队。</p>');
INSERT INTO `news` VALUES (74, '2023-12-18 21:28:11', '新时代的改革开放之路', '“势”与“情” 绘就新画卷', 'upload/14-1702906018433.jpg', '<p>2023年是改革开放45周年。45年来，我们解放思想、实事求是，大胆地试、勇敢地改，干出了一片新天地。新时代，中国坚定不移推进全面深化改革开放，汇聚起共创美好未来的澎湃动力。为深入了解新时代改革开放的发展成效，新华社记者围绕经济、政治、文化、社会、生态、党建等领域行进式采访，深入基层体验各方面的新变化。生态文明建设是关系中华民族永续发展的根本大计。建立国家公园体制，是生态文明和美丽中国建设的重大制度创新。东北虎豹国家公园设立以来，园区内的自然生态系统得到了整体性的保护和修复，正是推进生态文明制度建设的典型。东北虎豹国家公园创新性地使用了实时传输、人工智能等很多的高新技术，能够对东北虎、东北豹等野生动物实时活动的信息、活动规律进行实时跟踪。目前园区内生活着上万名居民。国家公园的建立保护了优质的生物多样性资源，也为周边的居民甚至社区未来长期的可持续发展带来了契机。党的十八大以来，我国碳排放强度累计下降超过35%，绿色日益成为高质量发展的鲜明底色。新时代的改革开放之路上，亿万人民保持建设生态文明的战略定力，锲而不舍，接续努力，必将汇聚起更加磅礴的力量，为子孙后代留下一个清洁美丽的家园！</p>');

-- ----------------------------
-- Table structure for storeup
-- ----------------------------
DROP TABLE IF EXISTS `storeup`;
CREATE TABLE `storeup`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) NULL DEFAULT NULL COMMENT '商品id',
  `tablename` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表名',
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `picture` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片',
  `type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)',
  `inteltype` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '推荐类型',
  `remark` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '收藏表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of storeup
-- ----------------------------
INSERT INTO `storeup` VALUES (2, '2023-12-14 16:58:50', 18, 38, 'jinrixinwen', '标题8', 'upload/jinrixinwen_tupian8.jpg', '21', '', '');
INSERT INTO `storeup` VALUES (3, '2023-12-14 16:58:52', 18, 38, 'jinrixinwen', '标题8', 'upload/jinrixinwen_tupian8.jpg', '21', '', '');
INSERT INTO `storeup` VALUES (6, '2023-12-18 22:50:14', 20, 42, 'jinrixinwen', '津美书院揭牌成立 “艺术国家队”入驻天津美术学院', 'upload/7-1702901385152.jpg', '1', '', '');

-- ----------------------------
-- Table structure for systemintro
-- ----------------------------
DROP TABLE IF EXISTS `systemintro`;
CREATE TABLE `systemintro`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `subtitle` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '副标题',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  `picture1` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片1',
  `picture2` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片2',
  `picture3` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片3',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '关于我们' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of systemintro
-- ----------------------------
INSERT INTO `systemintro` VALUES (1, '2023-12-13 21:46:01', '系统简介', 'SYSTEM INTRODUCTION', '<p><span style=\"color: rgb(55, 65, 81);\">随着信息时代的到来，人们对于获取最新、最全面的新闻信息有着日益增长的需求。为了满足用户对多元化新闻来源的追求，我们开发了一款全新的新闻聚合App，致力于为用户提供更便捷、更个性化的新闻阅读体验。设计简洁直观的用户界面，让用户能够轻松快速地浏览新闻，随时随地获取所需信息。支持图文、视频、音频等多媒体形式，满足用户对不同形式新闻内容的需求，提供更加丰富的阅读体验。严格遵循相关隐私法规，用户的个人信息将得到安全有效的保护。引入内容审核机制，确保新闻内容的真实性和合法性，杜绝虚假信息传播。我们将持续优化系统功能，引入更先进的技术，提升用户体验。未来的发展方向包括拓展合作伙伴关系，增加更多高质量的新闻源，以及进一步提升个性化推荐算法的精准度。我们致力于打造成为用户首选的新闻阅读平台，让用户随时随地轻松获取最新、最有价值的信息。</span></p>', 'upload/20-1702907687883.jpg', 'upload/21-1702907692277.jpg', 'upload/22-1702907696753.jpg');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `role` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin', '管理员', '2023-12-13 21:46:01');

-- ----------------------------
-- Table structure for xinwenfenlei
-- ----------------------------
DROP TABLE IF EXISTS `xinwenfenlei`;
CREATE TABLE `xinwenfenlei`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xinwenfenlei` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '新闻分类',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '新闻分类' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of xinwenfenlei
-- ----------------------------
INSERT INTO `xinwenfenlei` VALUES (29, '2023-12-18 19:52:55', '体育');
INSERT INTO `xinwenfenlei` VALUES (30, '2023-12-18 19:53:11', '音乐');
INSERT INTO `xinwenfenlei` VALUES (31, '2023-12-18 19:53:17', '国际');
INSERT INTO `xinwenfenlei` VALUES (32, '2023-12-18 19:53:30', '教育');
INSERT INTO `xinwenfenlei` VALUES (34, '2023-12-18 19:54:03', '美食');
INSERT INTO `xinwenfenlei` VALUES (35, '2023-12-18 19:54:25', '科技');

-- ----------------------------
-- Table structure for yonghu
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yonghuzhanghao` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户账号',
  `yonghuxingming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户姓名',
  `mima` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `xingbie` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `touxiang` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '头像',
  `dianhuahaoma` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话号码',
  `zhiye` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职业',
  `qiyemingcheng` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '企业名称',
  `youxiang` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `yonghuzhanghao`(`yonghuzhanghao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES (19, '2023-12-18 19:51:20', '12345678', '12345678', '123456', '男', 'upload/1-1702900161716.jpg', '18856541235', '文职', '好事事企业', '123456789@qq.com');
INSERT INTO `yonghu` VALUES (20, '2023-12-18 22:35:31', '11111111', '11111111', '123456', '男', 'upload/26-1702910056552.jpg', '18856555555', '无职', '无', '1123456789@qq.com');

SET FOREIGN_KEY_CHECKS = 1;
