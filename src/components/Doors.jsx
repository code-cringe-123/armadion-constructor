/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/doors.gltf 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../contexts/Customization'

function Doors(props) {
  const {handle, back, front} = useCustomization();
  const { nodes, materials } = useGLTF('./models/doors.gltf')
  console.log('doors', handle);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ручка_закругл.geometry} material={materials['Металл.001']} visible={handle === "Закругленная"} position={[1.289, 2.304, -0.429]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[1.476, 0.167, -0.331]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Эконом_1_внешк.geometry} material={materials['Эконом 1.001']} visible={front === "Эконом"} />
        <mesh geometry={nodes.Эконом_1_внешк_1.geometry} material={materials['Металл.002']} visible={front === "Эконом"}/>
      </group>
      <group position={[1.476, 0.167, -0.269]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Эконом_1_внутр_1.geometry} material={materials['Эконом 1']} visible={back === "Эконом"} />
        <mesh geometry={nodes.Эконом_1_внутр_2.geometry} material={materials['Текстура дерево']} visible={back === "Эконом"} />
        <mesh geometry={nodes.Эконом_1_внутр_3.geometry} material={materials['Металл.003']} visible={back === "Эконом"} />
      </group>
      <mesh geometry={nodes.Ручка_квадрат_металл.geometry} material={materials['Металл.004']} visible={handle === "КвадратМеталл"} position={[1.357, 1.812, -0.429]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[-0.558, 0.167, -0.299]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Термодверь_внутр_1.geometry} material={materials['Белая дверь.001']} visible={back === "Термодверь"} />
        <mesh geometry={nodes.Термодверь_внутр_2.geometry} material={materials['Стекло.001']} visible={back === "Термодверь"} />
        <mesh geometry={nodes.Термодверь_внутр_3.geometry} material={materials['Метал тёмный.002']} visible={back === "Термодверь"} />
        <mesh geometry={nodes.Термодверь_внутр_4.geometry} material={materials['Металл.005']} visible={back === "Термодверь"} />
      </group>
      <group position={[-0.558, 0.167, -0.431]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Термодверь_внешк.geometry} material={materials['Метал тёмный.004']} visible={front === "Термодверь"} />
        <mesh geometry={nodes.Термодверь_внешк_1.geometry} material={materials['Металл.006']} visible={front === "Термодверь"} />
        <mesh geometry={nodes.Термодверь_внешк_2.geometry} material={materials.Стекло} visible={front === "Термодверь"} />
      </group>
      <group position={[-0.558, 0.167, -0.299]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Трио_внутр_1.geometry} material={materials['белый трио.001']} visible={back === "Трио"} />
        <mesh geometry={nodes.Трио_внутр_2.geometry} material={materials['Метал ручка тёмно серый.001']} visible={back === "Трио"} />
      </group>
      <mesh geometry={nodes['Ручка_квдрат_темно-серая'].geometry} material={materials['Метал ручка тёмно серый.002']} visible={handle === "КвадратТемноСерая"} position={[1.357, 1.812, -0.427]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[1.476, 0.167, -0.37]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.02}>
        <mesh geometry={nodes.Трио_внешк_1.geometry} material={materials['Металл синий.002']} visible={front === "Трио"}/>
        <mesh geometry={nodes.Трио_внешк_2.geometry} material={materials['Метал ручка тёмно серый.003']} visible={front === "Трио"}/>
      </group>
      <group position={[1.476, 0.167, -0.37]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.02}>
        <mesh geometry={nodes.Бастион_внешк.geometry} material={materials['Дверь бастион']} visible={front === "Бастион"} />
        <mesh geometry={nodes.Бастион_внешк_1.geometry} material={materials['Металл синий.004']} visible={front === "Бастион"} />
        <mesh geometry={nodes.Бастион_внешк_2.geometry} material={materials['Металл синий.001']} visible={front === "Бастион"} />
        <mesh geometry={nodes.Бастион_внешк_3.geometry} material={materials['Металл.007']} visible={front === "Бастион"}/>
      </group>
      <group position={[-0.558, 0.167, -0.299]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.02}>
        <mesh geometry={nodes.Бастион_внутр.geometry} material={materials['Материал.002']} visible={back === "Бастион"} />
        <mesh geometry={nodes.Бастион_внутр_1.geometry} material={materials['Металл.008']} visible={back === "Бастион"} />
      </group>
      <mesh geometry={nodes['ручка_кругло-квадратная'].geometry} material={materials['Металл.009']} visible={handle === "КруглоКвадратная"} position={[1.282, 2.299, -0.43]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[1.476, 0.167, -0.299]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.02}>
        <mesh geometry={nodes.Альба_внутр.geometry} material={materials['Белая дверь']} visible={back === "Альба"} />
        <mesh geometry={nodes.Альба_внутр_1.geometry} material={materials['Золото.001']} visible={back === "Альба"} />
      </group>
      <mesh geometry={nodes.ручка_трапеция_золото.geometry} material={materials['Золото.002']} visible={handle === "ТрапецияЗолото"} position={[1.227, 2.238, -0.431]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[-0.559, 0.495, -0.441]} scale={0.02}>
        <mesh geometry={nodes.Альба_внешк.geometry} material={materials['Золото.003']} visible={front === "Альба"} />
        <mesh geometry={nodes.Альба_внешк_1.geometry} material={materials['Крмеов-золотистая древесина']} visible={front === "Альба"} />
      </group>
      <group position={[-0.558, 0.167, -0.299]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Кельт_внутр.geometry} material={materials['Дерево для двери кельт.001']} visible={back === "Кельт"} />
        <mesh geometry={nodes.Кельт_внутр_1.geometry} material={materials['Золото.004']} visible={back === "Кельт"} />
      </group>
      <mesh geometry={nodes.Ручка_трапеция_золотая.geometry} material={materials['Золото.005']} visible={handle === "ТрапецияЗолото"} position={[1.227, 2.238, -0.431]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[1.476, 0.106, -0.238]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Кельт_внешк.geometry} material={materials['Дерево для двери кельт']} visible={front === "Кельт"} />
        <mesh geometry={nodes.Кельт_внешк_1.geometry} material={materials['Золото.006']} visible={front === "Кельт"}/>
      </group>
      <mesh geometry={nodes['Ручка_квадрат_тёмно-серая'].geometry} material={materials['Метал ручка тёмно серый.004']} visible={handle === "КвадратТёмноСерая"} position={[1.361, 1.81, -0.436]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[-0.558, 0.167, -0.299]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Вельс_внутр.geometry} material={materials['белый трио']} visible={back === "Вельс"} />
        <mesh geometry={nodes.Вельс_внутр_1.geometry} material={materials['Материал.001']} visible={back === "Вельс"} />
        <mesh geometry={nodes.Вельс_внутр_2.geometry} material={materials['Метал ручка тёмно серый.005']} visible={back === "Вельс"} />
      </group>
      <group position={[1.476, 0.106, -0.238]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Вельс_внешк.geometry} material={materials['Металл синий.003']} visible={front === "Вельс"} />
        <mesh geometry={nodes.Вельс_внешк_1.geometry} material={materials['Металл синий']} visible={front === "Вельс"}/>
        <mesh geometry={nodes.Вельс_внешк_2.geometry} material={materials['Метал тёмный.005']} visible={front === "Вельс"}/>
        <mesh geometry={nodes.Вельс_внешк_3.geometry} material={materials['Металл.010']} visible={front === "Вельс"} />
        <mesh geometry={nodes.Вельс_внешк_4.geometry} material={materials['Метал ручка тёмно серый.006']} visible={front === "Вельс"} />
      </group>
      <group position={[-0.558, 0.167, -0.299]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Швед_внутр_1.geometry} material={materials['Материал.004']} visible={back === "Швед"} />
        <mesh geometry={nodes.Швед_внутр_2.geometry} material={materials['Материал.005']} visible={back === "Швед"} />
      </group>
      <group position={[1.476, 0.31, -0.434]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Швед_внешк.geometry} material={materials['Материал.006']} visible={front === "Швед"} />
        <mesh geometry={nodes.Швед_внешк_1.geometry} material={materials['Метал тёмный.001']} visible={front === "Швед"} />
        <mesh geometry={nodes.Швед_внешк_2.geometry} material={materials['Метал тёмный.006']} visible={front === "Швед"} />
      </group>
      <mesh geometry={nodes.Ручка_квадрат_чёрн.geometry} material={materials['Материал.007']} visible={handle === "КвадратЧерная"} position={[1.36, 1.811, -0.431]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      <group position={[-0.558, 0.167, -0.248]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
        <mesh geometry={nodes.Порто_муар_внутр.geometry} material={materials['Дерево порто муар']} visible={back === "ПортоМуар"} />
        <mesh geometry={nodes.Порто_муар_внутр_1.geometry} material={materials['Металл.011']} visible={back === "ПортоМуар"} />
      </group>
      <group position={[1.476, 0.167, -0.344]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.02}>
        <mesh geometry={nodes.Порто_муар_внешк.geometry} material={materials['Метал тёмный.007']} visible={front === "ПортоМуар"} />
        <mesh geometry={nodes.Порто_муар_внешк_1.geometry} material={materials['Металл.012']} visible={front === "ПортоМуар"} />
        <mesh geometry={nodes.Порто_муар_внешк_2.geometry} material={materials['Метал тёмный.008']} visible={front === "ПортоМуар"} />
      </group>
      <mesh geometry={nodes.ручка_закруглённая.geometry} material={materials['Металл.013']} visible={handle === "Закругленная"} position={[1.288, 2.305, -0.433]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} />
    </group>
  )
}

useGLTF.preload('./models/doors.gltf')

export default Doors;