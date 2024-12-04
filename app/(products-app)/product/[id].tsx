import { Size } from "@/core/products/interfaces/product.interface";
import { ProductImages } from "@/presentation/products/components/ProductImages";
import { useProduct } from "@/presentation/products/hooks/useProduct";
import { useCameraStore } from "@/presentation/store/useCameraStore";
import { MenuIconButton } from "@/presentation/theme/components/MenuIconButton";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import { ThemedButtonGroup } from "@/presentation/theme/components/ThemedButtonGroup";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import { ThemedView } from "@/presentation/theme/components/ThemedView";
import {
  Redirect,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Formik } from "formik";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const ProductScreen = () => {
  const { selectedImage, clearImages } = useCameraStore();
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { productQuery, productMutation } = useProduct(`${id}`);

  useEffect(() => {
    return () => {
      clearImages();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MenuIconButton
          onPress={() => router.push("/camera")}
          icon="camera-outline"
        />
      ),
    });
  }, []);

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title,
      });
    }
  }, [productQuery.data]);

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  if (!productQuery.data) {
    <Redirect href={"/(products-app)/(home)"} />;
  }

  const product = productQuery.data!;

  return (
    <Formik
      initialValues={product}
      onSubmit={(productLike) => productMutation.mutate(productLike)}
    >
      {({ values, handleSubmit, handleChange, setFieldValue }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView>
            <ProductImages images={[...product.images, ...selectedImage]} />
            <ThemedView style={{ marginHorizontal: 10 }}>
              <ThemedTextInput
                style={{ marginVertical: 5 }}
                placeholder="Títuto"
                value={values.title}
                onChangeText={handleChange("title")}
              />
              <ThemedTextInput
                style={{ marginVertical: 5 }}
                placeholder="Slug"
                value={values.slug}
                onChangeText={handleChange("slug")}
              />
              <ThemedTextInput
                style={{ marginVertical: 5 }}
                placeholder="Descripción"
                multiline
                numberOfLines={5}
                value={values.description}
                onChangeText={handleChange("description")}
              />
            </ThemedView>
            <ThemedView
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <ThemedTextInput
                style={{ flex: 1 }}
                placeholder="Precio"
                value={values.price.toString()}
                onChangeText={handleChange("price")}
              />
              <ThemedTextInput
                style={{ flex: 1 }}
                placeholder="Inventario"
                value={values.stock.toString()}
                onChangeText={handleChange("stock")}
              />
            </ThemedView>
            <ThemedView style={{ marginHorizontal: 10 }}>
              <ThemedButtonGroup
                options={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
                selectOptions={values.sizes}
                onSelect={(selectedSize) => {
                  const newSizeValue = values.sizes.includes(
                    selectedSize as Size
                  )
                    ? values.sizes.filter((s) => s !== selectedSize)
                    : [...values.sizes, selectedSize];

                  setFieldValue("sizes", newSizeValue);
                }}
              />
              <ThemedButtonGroup
                options={["kid", "men", "women", "unisex"]}
                selectOptions={[values.gender]}
                onSelect={(selectedOption) =>
                  setFieldValue("gender", selectedOption)
                }
              />
            </ThemedView>

            {/* Boton para guardar */}
            <View
              style={{ marginHorizontal: 10, marginBottom: 50, marginTop: 20 }}
            >
              <ThemedButton icon="save-outline" onPress={() => handleSubmit()}>
                Guardar
              </ThemedButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ProductScreen;
