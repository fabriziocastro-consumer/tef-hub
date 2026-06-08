const WHATSAPP_NUMBER = "551126265184";

const tiposSolicitacao = {
  tef_pix: "TEF + PIX no TEF",
  tef: "Somente TEF",
  pix: "Somente PIX no TEF (TEF já configurado)"
};

const regrasAdquirentes = {
  REDE: {
    label: "Número lógico",
    ruleText: "REDE: número lógico obrigatório com exatamente 15 dígitos numéricos.",
    hint: "Obrigatório: 15 dígitos numéricos.",
    validate: (v) => /^\d{15}$/.test(v),
    error: "Para REDE, informe exatamente 15 dígitos numéricos."
  },
  CIELO: {
    label: "Número lógico",
    ruleText: "CIELO: número lógico obrigatório com exatamente 9 dígitos numéricos. Ex.: 123456789.",
    hint: "Obrigatório: 9 dígitos numéricos. Ex.: 123456789.",
    validate: (v) => /^\d{9}$/.test(v),
    error: "Para CIELO, informe exatamente 9 dígitos numéricos."
  },
  STONE: {
    label: "Código SAK",
    ruleText: "STONE: Código SAK obrigatório, alfanumérico, com exatamente 32 caracteres. Pode conter letras e números.",
    hint: "Obrigatório: 32 caracteres alfanuméricos.",
    validate: (v) => /^[A-Za-z0-9]{32}$/.test(v),
    error: "Para STONE, o Código SAK deve ser alfanumérico e conter exatamente 32 caracteres."
  },
  "VERO / BANRISUL": {
    label: "Número lógico",
    ruleText: "VERO / BANRISUL: número lógico obrigatório com exatamente 15 dígitos numéricos.",
    hint: "Obrigatório: 15 dígitos numéricos.",
    validate: (v) => /^\d{15}$/.test(v),
    error: "Para VERO / BANRISUL, informe exatamente 15 dígitos numéricos."
  },
  SICREDI: {
    label: "Número lógico",
    ruleText: "SICREDI: número lógico obrigatório com exatamente 8 dígitos numéricos.",
    hint: "Obrigatório: 8 dígitos numéricos.",
    validate: (v) => /^\d{8}$/.test(v),
    error: "Para SICREDI, informe exatamente 8 dígitos numéricos."
  },
  "SIPAG / SICOOB": {
    label: "Número lógico",
    ruleText: "SIPAG / SICOOB: número lógico obrigatório inicia com a letra T e possui 8 caracteres no total. Ex.: T1234567.",
    hint: "Obrigatório: inicia com T + 7 números. Ex.: T1234567.",
    validate: (v) => /^T\d{7}$/i.test(v),
    error: "Para SIPAG / SICOOB, informe T + 7 números, totalizando 8 caracteres. Ex.: T1234567."
  },
  PAGSEGURO: {
    label: "Número lógico",
    ruleText: "PAGSEGURO: número lógico obrigatório com 15 caracteres, podendo iniciar com T. Ex.: T1234567891011.",
    hint: "Obrigatório: 15 caracteres, pode iniciar com T.",
    validate: (v) => /^T?\d{14,15}$/i.test(v),
    error: "Para PAGSEGURO, informe 15 caracteres. Pode iniciar com T."
  },
  GETNET: {
    label: "Número lógico",
    ruleText: "GETNET: número lógico obrigatório com exatamente 8 dígitos numéricos.",
    hint: "Obrigatório: 8 dígitos numéricos.",
    validate: (v) => /^\d{8}$/.test(v),
    error: "Para GETNET, informe exatamente 8 dígitos numéricos."
  }
};

const regrasPix = {
  "BANCO DO BRASIL": ["Chave PIX", "Developer Application Key", "Client ID", "Client Secret"],
  "BANCO DO NORDESTE": ["Chave PIX", "Client ID", "Client Secret"],
  "BANCO BRADESCO": ["Chave Aleatória"],
  "BANCO ITAU": ["Chave PIX"],
  "BANCO MERCADO PAGO": ["Public Key", "Access Token", "Client ID", "Client Secret", "Chave PIX"],
  "BANCO PAGSEGURO (PAGBANK)": ["CNPJ", "Certificado e Private Key", "Client ID", "Client Secret", "Chave PIX"],
  "BANCO SANTANDER": ["Chave PIX", "Client ID", "Secret Key"],
  "BANCO SICOOB": ["Chave PIX", "Cliente ID"],
  "BANCO SICREDI": ["Chave PIX", "Client ID", "Client Secret", "Comprovante do portal da Sicredi"],
  BANRISUL: ["Client ID", "Client Secret", "Chave_Dict"]
};

const guiasPix = {
  "BANCO DO BRASIL": {
    title: "Banco do Brasil",
    file: "banco-do-brasil.pdf",
    preview: true
  },
  "BANCO DO NORDESTE": {
    title: "Banco do Nordeste",
    file: "banco-do-nordeste.pdf",
    preview: true
  },
  "BANCO BRADESCO": {
    title: "Banco Bradesco",
    file: "banco-bradesco.pdf",
    preview: true
  },
  "BANCO ITAU": {
    title: "Banco Itaú",
    file: "banco-itau.pdf",
    preview: true
  },
  "BANCO MERCADO PAGO": {
    title: "Banco Mercado Pago",
    file: "mercado-pago.pdf",
    preview: true
  },
  "BANCO PAGSEGURO (PAGBANK)": {
    title: "PagSeguro/PagBank",
    file: "pagseguro-pagbank.pdf",
    description: "No PDF aparecerá uma orientação \"Clique aqui\" para preencher. Quando visualizar essa opção, clique no link abaixo.",
    link: "https://app.pipefy.com/public/form/z7Uas1lI",
    linkLabel: "Abrir formulário Pipefy do PagBank",
    preview: true
  },
  "BANCO SANTANDER": {
    title: "Banco Santander",
    file: "santander.pdf",
    preview: true
  },
  "BANCO SICOOB": {
    title: "Banco Sicoob",
    file: "banco-sicoob.pdf",
    preview: true
  },
  "BANCO SICREDI": {
    title: "Banco Sicredi",
    file: "banco-sicredi.pdf",
    preview: true
  },
  BANRISUL: {
    title: "Banrisul",
    description: `O próximo passo é enviar um e-mail ao banco Banrisul, que é o adquirente utilizado atualmente para recebimento de pagamentos via cartão (crédito e débito).

E-mail para envio: inovacaocon@banrisul.com.br

No e-mail, solicite o credenciamento do PIX via TEF e o envio das chaves de integração: 
Client ID: 
Client Secret: 
Chave_Dict:

DADOS DO CLIENTE FINAL TEF:
- Nome do Cliente (Empresa):
- CNPJ:
- Agência (Banrisul):
- Conta (Banrisul):
- Nome Completo do Contato da Empresa:
- E-mail do Contato:

DADOS DO INTEGRADOR:
- Nome da Empresa: Elgin S.A
- CNPJ: 52.556.578/0001-22
- Nome Completo do Técnico: Wagner Soares
- E-mail do Técnico: wagner.soares@elgin.com.br`
  }
};

const instrucoesAnexoPix = {
  "BANCO PAGSEGURO (PAGBANK)::Certificado e Private Key": {
    message: "Encaminhe o certificado e o Private Key enviados pela PagSeguro.",
    hint: "Depois de abrir o WhatsApp, anexe os dois arquivos na conversa.",
    value: "Certificado e Private Key serão encaminhados como anexo no WhatsApp."
  }
};

const modelosPinpad = {
  Gertec: ["PPC920", "PPC930", "MP15"],
  "Ingênico": ["iPP320", "Lane 3000"],
  Verifone: ["VX800", "VX820", "P200"]
};

const form = document.querySelector("#tefForm");
const progressBar = document.querySelector("#progressBar");
const tipoSolicitacao = document.querySelector("#tipoSolicitacao");
const tefSections = document.querySelectorAll("[data-tef-section]");
const pixFormSection = document.querySelector("#pixFormSection");
const adquirente = document.querySelector("#adquirente");
const numeroLogico = document.querySelector("#numeroLogico");
const numeroLogicoLabel = document.querySelector("#numeroLogicoLabel");
const adquirenteHint = document.querySelector("#adquirenteHint");
const adquirenteRuleText = document.querySelector("#adquirenteRuleText");
const pinpadMarca = document.querySelector("#pinpadMarca");
const pinpadModelo = document.querySelector("#pinpadModelo");
const modeloHint = document.querySelector("#modeloHint");
const bancoPix = document.querySelector("#bancoPix");
const bancoHint = document.querySelector("#bancoHint");
const bankPdfGuide = document.querySelector("#bankPdfGuide");
const bankPdfTitle = document.querySelector("#bankPdfTitle");
const bankPdfText = document.querySelector("#bankPdfText");
const bankPdfActions = document.querySelector("#bankPdfActions");
const bankPdfDownload = document.querySelector("#bankPdfDownload");
const bankPdfExternal = document.querySelector("#bankPdfExternal");
const bankPdfPreview = document.querySelector("#bankPdfPreview");
const pixDynamicFields = document.querySelector("#pixDynamicFields");
const summaryText = document.querySelector("#summaryText");
const sendInfoBtn = document.querySelector("#sendInfoBtn");
const sendHint = document.querySelector("#sendHint");
const notice = document.querySelector("#notice");

const onlyDigits = (value) => value.replace(/\D/g, "");

function maskCnpj(value) {
  const v = onlyDigits(value).slice(0, 14);
  return v
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function maskCpf(value) {
  const v = onlyDigits(value).slice(0, 11);
  return v
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function maskPhone(value) {
  const v = onlyDigits(value).slice(0, 11);
  if (v.length <= 10) {
    return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

document.querySelector("#cnpj").addEventListener("input", (e) => {
  e.target.value = maskCnpj(e.target.value);
});
document.querySelector("#cpf").addEventListener("input", (e) => {
  e.target.value = maskCpf(e.target.value);
});
document.querySelector("#telefone").addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);
});

function isValidCpf(cpf) {
  cpf = onlyDigits(cpf);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
  let digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  if (digit !== Number(cpf[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
  digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  return digit === Number(cpf[10]);
}

function isValidCnpj(cnpj) {
  cnpj = onlyDigits(cnpj);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  const calc = (base, weights) => {
    const sum = base.split("").reduce((acc, digit, i) => acc + Number(digit) * weights[i], 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };
  const d1 = calc(cnpj.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = calc(cnpj.slice(0, 12) + d1, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return d1 === Number(cnpj[12]) && d2 === Number(cnpj[13]);
}

function needsTef() {
  return tipoSolicitacao.value === "tef" || tipoSolicitacao.value === "tef_pix";
}

function needsPix() {
  return tipoSolicitacao.value === "pix" || tipoSolicitacao.value === "tef_pix";
}

function dataNeedsTef(data) {
  return data.tipoSolicitacao === "tef" || data.tipoSolicitacao === "tef_pix";
}

function dataNeedsPix(data) {
  return data.tipoSolicitacao === "pix" || data.tipoSolicitacao === "tef_pix";
}

function setError(input, message) {
  const field = input.closest(".field") || input.parentElement;
  const error = field.querySelector(".error");
  field.classList.toggle("invalid", Boolean(message));
  if (error) error.textContent = message || "";
}

function clearField(input) {
  input.value = "";
  input.required = false;
  setError(input, "");
}

function clearCheckbox(input) {
  input.checked = false;
  input.required = false;
  setError(input, "");
}

function getPixAttachmentInstruction(banco, campo) {
  return instrucoesAnexoPix[`${banco}::${campo}`];
}

function updatePixGuide(banco) {
  const guia = guiasPix[banco];

  if (!guia) {
    bankPdfGuide.classList.add("hidden");
    bankPdfPreview.removeAttribute("src");
    bankPdfPreview.hidden = true;
    bankPdfDownload.removeAttribute("href");
    bankPdfDownload.hidden = true;
    bankPdfExternal.removeAttribute("href");
    bankPdfExternal.hidden = true;
    bankPdfActions.hidden = true;
    return;
  }

  bankPdfTitle.textContent = `Passo a passo para ${guia.title}`;
  bankPdfText.textContent = guia.description || "Antes de preencher as credenciais, abra ou baixe o PDF para seguir o passo a passo do banco selecionado e gerar as credenciais.";

  if (guia.file) {
    bankPdfDownload.href = guia.file;
    bankPdfDownload.download = guia.file.split("/").pop();
    bankPdfDownload.hidden = false;
  } else {
    bankPdfDownload.removeAttribute("href");
    bankPdfDownload.hidden = true;
  }

  if (guia.link) {
    bankPdfExternal.href = guia.link;
    bankPdfExternal.textContent = guia.linkLabel || "Abrir orientação";
    bankPdfExternal.hidden = false;
  } else {
    bankPdfExternal.removeAttribute("href");
    bankPdfExternal.hidden = true;
  }

  bankPdfActions.hidden = !guia.file && !guia.link;

  if (guia.preview) {
    bankPdfPreview.src = guia.file;
    bankPdfPreview.hidden = false;
  } else {
    bankPdfPreview.removeAttribute("src");
    bankPdfPreview.hidden = true;
  }

  bankPdfGuide.classList.remove("hidden");
}

function updateEstabelecimentoVisibility() {
  const pixOnly = tipoSolicitacao.value === "pix";
  const fieldsToHideForPixOnly = [
    "razaoSocial",
    "nomeFantasia",
    "inscricaoEstadual",
    "proprietario",
    "cpf",
    "email",
    "telefone"
  ];
  const requiredWhenNotPixOnly = [
    "razaoSocial",
    "nomeFantasia",
    "proprietario",
    "cpf",
    "email",
    "telefone"
  ];

  fieldsToHideForPixOnly.forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;

    const field = input.closest(".field");
    if (!field) return;

    field.classList.toggle("hidden", pixOnly);
    input.required = !pixOnly && requiredWhenNotPixOnly.includes(id);

    if (pixOnly) {
      input.value = "";
      setError(input, "");
    }
  });

  const cnpj = document.getElementById("cnpj");
  if (cnpj) {
    cnpj.required = true;
    cnpj.closest(".field")?.classList.remove("hidden");
  }
}

function updateRequestVisibility() {
  const showTef = needsTef();
  const showPix = needsPix();

  tefSections.forEach((section) => section.classList.toggle("hidden", !showTef));
  pixFormSection.classList.toggle("hidden", !showPix);
  updateEstabelecimentoVisibility();
  updateSectionNumbers();

  [adquirente, numeroLogico, pinpadMarca, pinpadModelo].forEach((input) => {
    input.required = showTef;
  });
  bancoPix.required = showPix;

  if (!showTef) {
    [adquirente, numeroLogico, pinpadMarca, pinpadModelo].forEach(clearField);
    pinpadModelo.innerHTML = '<option value="">Selecione primeiro a marca</option>';
    modeloHint.textContent = "Modelos aceitos serão exibidos conforme a marca.";
    numeroLogicoLabel.textContent = "Número lógico *";
    adquirenteHint.textContent = "Selecione a adquirente.";
    adquirenteRuleText.textContent = "Selecione a adquirente para exibir a regra correta do número lógico ou Código SAK.";
  } else {
    updateAdquirenteRule();
    updatePinpadModels();
  }

  if (!showPix) {
    clearField(bancoPix);
    pixDynamicFields.innerHTML = "";
    bancoHint.textContent = "Selecione o banco para carregar os campos obrigatórios.";
    updatePixGuide("");
  } else if (bancoPix.value) {
    createPixFields();
  } else {
    updatePixGuide("");
  }

  updateProgress();
  updateSummary();
  updateSubmitState();
}

function updateSectionNumbers() {
  let visibleIndex = 1;
  document.querySelectorAll(".form-section").forEach((section) => {
    const number = section.querySelector(".section-number");
    if (!number || section.classList.contains("hidden")) return;
    number.textContent = visibleIndex;
    visibleIndex += 1;
  });
}

function updateAdquirenteRule() {
  if (!needsTef()) return;

  const regra = regrasAdquirentes[adquirente.value];

  if (!regra) {
    numeroLogicoLabel.textContent = "Número lógico *";
    adquirenteHint.textContent = "Selecione a adquirente";
    adquirenteRuleText.textContent = "Selecione a adquirente para exibir a regra correta do número lógico ou Código SAK.";
    return;
  }

  numeroLogicoLabel.textContent = `${regra.label} *`;
  adquirenteHint.textContent = regra.hint;
  adquirenteRuleText.textContent = regra.ruleText;
  validateField(numeroLogico);
  updateSummary();
}

function updatePinpadModels() {
  pinpadModelo.innerHTML = "";
  const marca = pinpadMarca.value;
  const modelos = modelosPinpad[marca] || [];

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = modelos.length ? "Selecione o modelo" : "Selecione primeiro a marca";
  pinpadModelo.appendChild(defaultOption);

  modelos.forEach((modelo) => {
    const option = document.createElement("option");
    option.value = modelo;
    option.textContent = modelo;
    pinpadModelo.appendChild(option);
  });

  modeloHint.textContent = modelos.length
    ? `Modelos aceitos para ${marca}: ${modelos.join(", ")}.`
    : "Modelos aceitos serão exibidos conforme a marca.";

  validateField(pinpadModelo);
  updateSummary();
}

function toFieldKey(campo) {
  return campo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function createPixFields() {
  pixDynamicFields.innerHTML = "";
  const banco = bancoPix.value;
  const campos = regrasPix[banco] || [];
  updatePixGuide(banco);

  bancoHint.textContent = campos.length
    ? `Campos obrigatórios para ${banco}: ${campos.join(", ")}.`
    : "Selecione o banco para carregar os campos obrigatórios.";

  campos.forEach((campo) => {
    const key = toFieldKey(campo);
    const attachmentInstruction = getPixAttachmentInstruction(banco, campo);
    const wrapper = document.createElement("div");

    if (attachmentInstruction) {
      wrapper.className = "field field--full";
      wrapper.innerHTML = `
        <label class="check check--attachment" for="pix_${key}">
          <input id="pix_${key}" name="pix_${key}" type="checkbox" data-pix-label="${campo}" data-pix-value="${attachmentInstruction.value}" required />
          <span>${attachmentInstruction.message}</span>
        </label>
        <small class="hint">${attachmentInstruction.hint}</small>
        <small class="error"></small>
      `;
    } else {
      const isCnpj = campo.toLowerCase() === "cnpj";
      wrapper.className = "field";
      wrapper.innerHTML = `
        <label for="pix_${key}">${campo} *</label>
        <input id="pix_${key}" name="pix_${key}" type="text" ${isCnpj ? 'inputmode="numeric" placeholder="00.000.000/0000-00" data-mask="cnpj"' : ""} data-pix-label="${campo}" required />
        <small class="error"></small>
      `;
    }

    pixDynamicFields.appendChild(wrapper);
  });

  updateSummary();
  updateSubmitState();
}

function getFieldError(input) {
  if (input.closest(".hidden")) {
    return "";
  }

  if (input.type === "checkbox") {
    return input.required && !input.checked ? "Confirme este item para enviar." : "";
  }

  const value = input.value.trim();

  if (input.required && !value) {
    return "Campo obrigatório.";
  }

  if (input.id === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Informe um e-mail válido.";
  }

  if ((input.id === "cnpj" || input.dataset.mask === "cnpj") && value && !isValidCnpj(value)) {
    return "Informe um CNPJ válido.";
  }

  if (input.id === "cpf" && value && !isValidCpf(value)) {
    return "Informe um CPF válido.";
  }

  if (input.id === "numeroLogico") {
    if (!needsTef()) return "";

    const regra = regrasAdquirentes[adquirente.value];
    if (!regra) {
      return "Selecione a adquirente antes de preencher.";
    }
    if (!regra.validate(value)) {
      return regra.error;
    }
  }

  if (input.id === "pinpadModelo" && value && pinpadMarca.value) {
    const modelos = modelosPinpad[pinpadMarca.value] || [];
    if (!modelos.includes(value)) {
      return "Selecione um modelo aceito para esta marca.";
    }
  }

  if (input.id === "bancoPix" && needsPix() && !value) {
    return "Selecione o banco PIX.";
  }

  return "";
}

function validateField(input) {
  const message = getFieldError(input);
  setError(input, message);
  return !message;
}

function getRequiredIds() {
  const requiredIds = [
    "tipoSolicitacao",
    "cnpj"
  ];

  if (tipoSolicitacao.value !== "pix") {
    requiredIds.push(
      "razaoSocial",
      "nomeFantasia",
      "proprietario",
      "cpf",
      "email",
      "telefone"
    );
  }

  if (needsTef()) {
    requiredIds.push("adquirente", "numeroLogico", "pinpadMarca", "pinpadModelo");
  }

  if (needsPix()) {
    requiredIds.push("bancoPix");
  }

  return requiredIds;
}

function validateForm() {
  let valid = true;

  getRequiredIds().forEach((id) => {
    const input = document.getElementById(id);
    if (!input || input.closest(".hidden")) return;
    input.required = true;
    if (!validateField(input)) valid = false;
  });

  document.querySelectorAll("#pixDynamicFields input").forEach((input) => {
    if (!validateField(input)) valid = false;
  });

  const confirmacao = document.querySelector("#confirmacao");
  const confirmacaoError = document.querySelector("#confirmacaoError");
  if (!confirmacao.checked) {
    confirmacaoError.textContent = "Confirme as informações antes de enviar.";
    valid = false;
  } else {
    confirmacaoError.textContent = "";
  }

  return valid;
}

function isFormComplete() {
  const requiredFieldsAreValid = getRequiredIds().every((id) => {
    const input = document.getElementById(id);
    return input && (input.closest(".hidden") || !getFieldError(input));
  });

  if (!requiredFieldsAreValid) return false;

  const pixFieldsAreValid = Array.from(document.querySelectorAll("#pixDynamicFields input"))
    .every((input) => !input.closest(".hidden") && !getFieldError(input));

  return pixFieldsAreValid && document.querySelector("#confirmacao").checked;
}

function updateSubmitState() {
  const ready = isFormComplete();
  sendInfoBtn.hidden = !ready;
  sendHint.hidden = ready;
}

function getFormData() {
  const data = Object.fromEntries(new FormData(form).entries());
  const pixCampos = {};

  document.querySelectorAll("#pixDynamicFields input").forEach((input) => {
    if (input.type === "checkbox") {
      pixCampos[input.dataset.pixLabel] = input.checked ? input.dataset.pixValue : "";
      return;
    }

    pixCampos[input.dataset.pixLabel] = input.value.trim();
  });

  data.pixCampos = pixCampos;
  return data;
}

function maskSensitive(label, value) {
  if (!value) return "";
  if (/anexo no WhatsApp/i.test(value)) return value;
  if (/client\s*_?\s*secret/i.test(label)) return value;
  if (/private\s*_?\s*key/i.test(label)) return value;
  if (/secret\s*_?\s*id/i.test(label)) return value;

  const isSensitive = /secret|token|key|certificado|private/i.test(label);
  if (!isSensitive) return value;
  if (value.length <= 4) return "informado";
  return `${"*".repeat(Math.max(value.length - 4, 8))}${value.slice(-4)}`;
}

function addLine(lines, label, value, options = {}) {
  const clean = String(value || "").trim();
  if (!clean && !options.always) return;
  lines.push(`${label}: ${clean}`);
}

function hasAnyFormValue(data) {
  const baseHasValue = Object.entries(data).some(([key, value]) => {
    return key !== "pixCampos" && typeof value === "string" && value.trim();
  });
  const pixHasValue = Object.values(data.pixCampos || {}).some((value) => String(value || "").trim());
  return baseHasValue || pixHasValue;
}

function buildSummary(data, mask = true) {
  const regra = regrasAdquirentes[data.adquirente];
  const lines = [];

  lines.push("SOLICITAÇÃO DE TEF / PIX NO TEF");
  addLine(lines, "Tipo de solicitação", tiposSolicitacao[data.tipoSolicitacao]);

  lines.push("");
  lines.push("DADOS DO ESTABELECIMENTO");
  addLine(lines, "CNPJ", data.cnpj);

  if (data.tipoSolicitacao !== "pix") {
    addLine(lines, "Razão Social", data.razaoSocial);
    addLine(lines, "Nome Fantasia", data.nomeFantasia);
    addLine(lines, "Inscrição Estadual", data.inscricaoEstadual);
    addLine(lines, "Nome do proprietário", data.proprietario);
    addLine(lines, "CPF", data.cpf);
    addLine(lines, "E-mail", data.email);
    addLine(lines, "Telefone", data.telefone);
  }

  if (dataNeedsTef(data)) {
    lines.push("");
    lines.push("DADOS DO TEF");
    addLine(lines, "Adquirente afiliada", data.adquirente);
    addLine(lines, "Número rede/código cadastrado", data.numeroRede);
    addLine(lines, regra?.label || "Número lógico", data.numeroLogico);

    lines.push("");
    lines.push("DADOS DO PINPAD");
    addLine(lines, "Marca", data.pinpadMarca);
    addLine(lines, "Modelo", data.pinpadModelo);
  }

  if (dataNeedsPix(data)) {
    lines.push("");
    lines.push("PIX NO TEF");
    addLine(lines, "Banco:", data.bancoPix);

    Object.entries(data.pixCampos || {}).forEach(([key, value]) => {
      addLine(lines, key, mask ? maskSensitive(key, value) : value);
    });
  }

  if (data.observacoes && data.observacoes.trim()) {
    lines.push("");
    lines.push("OBSERVAÇÕES");
    lines.push(data.observacoes.trim());
  }

  return lines.join("\n");
}

function updateSummary() {
  const data = getFormData();
  summaryText.textContent = hasAnyFormValue(data)
    ? buildSummary(data, true)
    : "Preencha o formulário para gerar o resumo.";
}

function updateProgress() {
  const fields = Array.from(form.querySelectorAll("input, select, textarea"))
    .filter((el) => !el.closest(".hidden") && el.type !== "checkbox");

  const filled = fields.filter((el) => el.value.trim()).length;
  const pct = fields.length ? Math.round((filled / fields.length) * 100) : 0;
  progressBar.style.width = `${pct}%`;
}

function showNotice(message, type = "success") {
  notice.hidden = false;
  notice.className = `notice ${type}`;
  notice.textContent = message;
}

function openWhatsApp(text) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = url;
}

sendInfoBtn.addEventListener("click", () => {
  if (!validateForm()) {
    showNotice("Corrija os campos destacados antes de enviar as informações.", "error");
    updateSubmitState();
    return;
  }

  const data = getFormData();
  const text = buildSummary(data, false);
  openWhatsApp(text);
  showNotice("WhatsApp aberto com a mensagem pronta para envio.", "success");
});

form.addEventListener("input", (event) => {
  if (!event.target.matches("input, select, textarea")) return;

  if (event.target.dataset.mask === "cnpj") {
    event.target.value = maskCnpj(event.target.value);
  }

  validateField(event.target);
  updateProgress();
  updateSummary();
  updateSubmitState();
});

form.addEventListener("change", (event) => {
  if (event.target.id === "tipoSolicitacao") updateRequestVisibility();
  if (event.target.id === "adquirente") updateAdquirenteRule();
  if (event.target.id === "pinpadMarca") updatePinpadModels();
  if (event.target.id === "bancoPix") createPixFields();

  if (event.target.id === "confirmacao") {
    document.querySelector("#confirmacaoError").textContent = event.target.checked
      ? ""
      : "Confirme as informações antes de enviar.";
  } else if (event.target.matches("input, select, textarea")) {
    validateField(event.target);
  }

  updateProgress();
  updateSummary();
  updateSubmitState();
});

updateAdquirenteRule();
updatePinpadModels();
updateRequestVisibility();
updateSummary();
updateProgress();
updateSubmitState();
