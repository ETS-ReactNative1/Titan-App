import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Switch } from "react-native-elements";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import CustomProgressbar from "../../components/CustomProgressbar";
import CustomScrollView from "../../components/CustomScrollView";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";
import CopyIcon from "../../../assets/copyIcon";
import Telegram from "../../../assets/telegram";
import CustomButton from "../../components/CustomButton";
import WhitelistModal from "./components/WhitelistModal";
import { useNavigation } from "@react-navigation/native";

function ManagePresale(props) {
  const [value, setValue] = useState(0.2);
  const [enabled, setEnabled] = useState(true);
  const [showWhitelist, setShowWhitelist] = useState(false);
  const navigation = useNavigation();
  return (
    <CustomScrollView
      style={styles.container}
      contentContainerStyle={styles.contentStyle}
    >
      <WhitelistModal
        visible={showWhitelist}
        onRequestClose={() => setShowWhitelist(false)}
      />
      {/* Presale Manager  */}
      <CardContainer style={styles.managerCard}>
        <Title style={styles.managerTitle}>Presale Manager</Title>
        <AppText style={styles.managerSubtitle}>
          Update, Deposit and manage presale with ease
        </AppText>
        <CustomProgressbar
          value={value}
          title={"0/2"}
          titleStyle={styles.progressTitle}
          startValue={"0 BNB"}
          endValue={"2 BNB"}
          style={styles.progressbar}
        />
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Name</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>Gold</Subtitle>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Symbol</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>GLD</Subtitle>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Token Address</Subtitle>
          <View style={styles.linkContainer}>
            <Subtitle
              style={{
                ...styles.managerRowSubtitle,
                color: Colors.primary,
              }}
            >
              0x4bdgs....sfjt6E
            </Subtitle>
          </View>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Presale Address</Subtitle>
          <View style={styles.linkContainer}>
            <Subtitle
              style={{
                ...styles.managerRowSubtitle,
                color: Colors.primary,
              }}
            >
              0xsfgy.....Dwd9T
            </Subtitle>
          </View>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Presale link</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>
            https://apelab.app
          </Subtitle>
        </View>
      </CardContainer>
      {/* Presale Steps */}
      <CardContainer style={styles.stepsCard}>
        <Subtitle style={styles.stepsTitle}>Presale Steps</Subtitle>
        <View style={styles.stepsContainer}>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>1.</Subtitle>
            <View>
              <AppText style={styles.stepText}>
                Exclude presale from fee’s
              </AppText>
              <AppText style={styles.stepSubtext}>
                Only for liquidity generation!
              </AppText>
            </View>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>2.</Subtitle>
            <View>
              <AppText style={styles.stepText}>Remove Fees</AppText>
              <AppText style={styles.stepSubtext}>
                Only for liquidity generation!
              </AppText>
            </View>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>3.</Subtitle>
            <AppText style={styles.stepText}>Deposit Tokens</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>4.</Subtitle>
            <AppText style={styles.stepText}>Finalize Presale</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>5.</Subtitle>
            <AppText style={styles.stepText}>Burn Tokens</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>6.</Subtitle>
            <AppText style={styles.stepText}>This is Step 6</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>7.</Subtitle>
            <AppText style={styles.stepText}>Withdraw Liquidity</AppText>
          </View>
        </View>
      </CardContainer>
      {/* Exclude Address */}
      <CardContainer style={styles.excludeAddress}>
        <Title style={styles.excludeTitle}>
          Exclude those address’s from every fee!
        </Title>
        <View style={styles.excludeCol}>
          <Subtitle>Presale Address</Subtitle>
          <View style={styles.excludeRow}>
            <Subtitle style={styles.token}>
              0xgydf4CIHF874F4R8DCN8SA9S7F6A522
            </Subtitle>
            <CopyIcon style={styles.copy} width={"10%"} height={"95%"} />
          </View>
        </View>
        <View style={styles.excludeCol}>
          <Subtitle>Apelab LPRouter</Subtitle>
          <View style={styles.excludeRow}>
            <Subtitle style={styles.token}>
              0xgydf4CIHF874F4R8DCN8SA9S7F6A522
            </Subtitle>
            <CopyIcon style={styles.copy} width={"10%"} height={"95%"} />
          </View>
        </View>
      </CardContainer>
      {/* Deposit presale token */}
      <CardContainer style={styles.excludeAddress}>
        {/* Used from excludeAddress style */}
        <Title style={styles.depositTitle}>Deposit presale tokens</Title>
        <AppText style={styles.depositSubtitle}>
          You need to deposit #Gold to comlete your presale
        </AppText>
        <AppText style={styles.depositDescription}>
          Make sure fees are diable before depositing tokens!
        </AppText>
        <Pressable
          android_ripple={{ color: Colors.white }}
          style={styles.depositButton}
        >
          <Subtitle style={styles.depositButtonText}>Deposit</Subtitle>
        </Pressable>
      </CardContainer>
      {/* Tools section */}
      <CardContainer style={styles.toolsCard}>
        <Title style={styles.toolsTitle}>Tools</Title>
        <View style={styles.toolsRow}>
          <AppText style={styles.toolsRowTitle}>Update Presale Details</AppText>
          <Pressable
            onPress={() => navigation.navigate("SubmitInfo")}
            style={styles.plusIconContainer}
          >
            <Entypo name="plus" size={14} color={Colors.black} />
          </Pressable>
        </View>
        <View style={styles.toolsRow}>
          <AppText style={styles.toolsRowTitle}>
            Presale whitelist:
            <AppText style={{ ...styles.toolsRowTitle, color: "#62AB06" }}>
              Enabled
            </AppText>
          </AppText>
          <Switch
            style={{ borderWidth: 1, borderColor: "#62AB06" }}
            thumbColor={"#62AB06"}
            trackColor={{
              false: Colors.bageBg,
              true: "#62AB06",
            }}
            value={enabled}
            onValueChange={(val) => setEnabled(val)}
          />
        </View>
        <View style={{ ...styles.toolsRow, height: "12%" }}>
          <AppText style={styles.toolsRowTitle}>
            Add/Remove Addresses (Whitelist)
          </AppText>
          <Pressable
            onPress={() => setShowWhitelist(true)}
            style={{
              ...styles.plusIconContainer,
              height: "50%",
              marginTop: "-2%",
            }}
          >
            <Entypo name="plus" size={14} color={Colors.black} />
          </Pressable>
        </View>
        <View style={styles.toolsRow}>
          <View style={styles.supportCol}>
            <AppText style={styles.toolsRowTitle}>Need Support?</AppText>
            <AppText style={{ fontSize: 6 }}>
              if you still cannot finalize then after recieveing support please
              cancel your sale and test your contract thoroughly on our
              supported test nets!
            </AppText>
          </View>

          <View style={styles.telegramContainer}>
            <Telegram width={"60%"} height={"90%"} style={styles.telegram} />
          </View>
        </View>
        <View style={styles.toolsRow}>
          <AppText style={styles.toolsRowTitle}>
            Withdraw Liquidity tokens
          </AppText>
          <View style={styles.withdrawCol}>
            <Pressable
              android_ripple={{ color: Colors.white }}
              style={styles.withdrawButton}
            >
              <Subtitle style={styles.withdrawButtonText}>Withdraw</Subtitle>
            </Pressable>
            <AppText style={styles.withdrawDate}>
              02/05/2022 0-22:0-52:0-4:1
            </AppText>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            title="Cancel Presale"
            // onPress={() => setShowMessage(true)}
            style={styles.createPresale}
            textStyle={styles.cancelText}
          />
          <CustomButton
            title="Finalize"
            style={styles.finalize}
            textStyle={styles.finalizeText}
          />
        </View>
      </CardContainer>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  managerCard: {
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "7%",
    overflow: "hidden",
    marginBottom: "2%",
    height: hp(60),
  },
  managerTitle: {
    fontFamily: "vsBold",
  },
  managerSubtitle: {
    fontSize: 11,
    paddingHorizontal: "18%",
    textAlign: "center",
    marginTop: "0.5%",
  },
  progressbar: {
    marginTop: "2%",
    marginBottom: "3%",
    marginLeft: "2%",
  },
  progressTitle: {
    fontSize: 12,
    fontFamily: "vietnamBold",
    color: Colors.primary,
  },
  managerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    alignItems: "center",
    marginVertical: "4%",
  },
  managerRowTitle: {
    fontSize: 18,
  },
  managerRowSubtitle: {
    fontSize: 15,
  },
  linkContainer: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
  },
  stepsCard: {
    marginVertical: "2%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    height: hp(54),
  },
  stepsTitle: {
    fontSize: 20,
  },
  stepsContainer: {
    flex: 1,
    marginTop: "5%",
  },
  stepRow: {
    flexDirection: "row",
    width: "100%",
    marginVertical: "3%",
  },
  stepNumber: {
    fontSize: 15,
    marginRight: "10%",
  },
  stepText: {
    fontSize: 15,
  },
  stepSubtext: {
    fontSize: 10,
    color: Colors.secondary,
  },
  excludeAddress: {
    height: hp(30),
    marginVertical: "2%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    alignItems: "center",
  },
  excludeTitle: {
    fontSize: 20,
    color: Colors.secondary,
    fontFamily: "vietnamMedium",
    textAlign: "center",
    marginBottom: "2%",
  },
  excludeCol: {
    width: "100%",
    marginVertical: "3%",
    paddingLeft: "5%",
  },
  excludeRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  token: {
    fontSize: 12,
    color: Colors.primary,
  },
  copy: { marginTop: "0.5%" },
  depositTitle: {
    fontFamily: "vsBold",
  },
  depositSubtitle: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: "4%",
    paddingHorizontal: "3%",
  },
  depositDescription: {
    fontSize: 12,
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: "6%",
  },
  depositButton: {
    width: wp(38),
    height: hp(5),
    backgroundColor: Colors.primary,
    borderRadius: wp(100) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  depositButtonText: {
    fontFamily: "vsBold",
    color: Colors.white,
    marginBottom: "3%",
  },
  toolsCard: {
    marginVertical: "2%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    height: hp(60),
    alignItems: "center",
  },
  toolsTitle: {
    fontFamily: "vsBold",
  },
  toolsRow: {
    flexDirection: "row",
    height: "8%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "4%",
  },
  toolsRowTitle: { fontSize: 15, width: "60%" },
  plusIconContainer: {
    width: "13%",
    height: "70%",
    borderRadius: wp(100) / 2,
    borderWidth: 2,
    marginTop: "3%",
    borderColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  supportCol: {
    width: "70%",
  },
  telegramContainer: {
    width: wp(6),
    height: hp(3.5),
    borderRadius: wp(100) / 2,
    backgroundColor: "#40b3e0",
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1%",
  },
  telegram: { marginRight: "6%", marginTop: "5%" },
  withdrawButton: {
    width: wp(17),
    height: hp(3.5),
    backgroundColor: Colors.primary,
    borderRadius: wp(100) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  withdrawButtonText: {
    fontFamily: "vietnamMedium",
    fontSize: 7,
    color: Colors.white,
    marginBottom: "3%",
  },
  withdrawDate: {
    fontSize: 6,
    fontFamily: "vietnamMedium",
  },
  withdrawCol: {
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: "5%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
    width: "100%",
  },
  createPresale: {
    width: "45%",
    height: hp(4),
    borderRadius: wp(100) / 40,
  },
  finalize: {
    width: "45%",
    height: hp(4),
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: wp(100) / 40,
  },
  finalizeText: {
    color: Colors.secondary,
    fontSize: 13,
    marginTop: "1%",
  },
  cancelText: {
    color: Colors.white,
    fontSize: 13,
    marginTop: "1%",
  },
});

export default ManagePresale;
