
export default function CreateCylinder({radiusTop, radiusBottom, height, radialSegments, color}) {

    return(
        <mesh position={[0,1,0]} rotation={[0, Math.PI/4 ,0]}>
            <cylinderGeometry args={[radiusTop, radiusBottom, height, radialSegments]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}