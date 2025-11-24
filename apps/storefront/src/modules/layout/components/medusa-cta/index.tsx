import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://anablock.com/" target="_blank" rel="noreferrer">
        Anablock
      </a>
      &
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
    </Text>
  )
}

export default MedusaCTA
