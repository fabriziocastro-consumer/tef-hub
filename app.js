const WHATSAPP_NUMBER = "551126265184";

const tiposSolicitacao = {
  tef_pix: "Configurar crédito, débito e PIX",
  tef: "Configurar somente crédito e débito",
  pix: "Configurar somente PIX — crédito e débito já configurados",
  troca_inclusao_adquirente: "Troca ou inclusão de adquirente"
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
    ruleText: "CIELO: número lógico obrigatório com exatamente 9 dígitos numéricos. Ex: 12345678-9.",
    hint: "Obrigatório: 9 dígitos numéricos. Ex: 12345678-9.",
    validate: (v) => /^\d{9}$/.test(v),
    error: "Para CIELO, informe exatamente 9 dígitos numéricos."
  },
  STONE: {
    label: "Código SAK",
    ruleText: "STONE: Código SAK alfanumérico, com exatamente 32 caracteres",
    hint: "Obrigatório: 32 caracteres alfanuméricos.",
    validate: (v) => /^[A-Za-z0-9]{32}$/.test(v),
    error: "Para STONE, o Código SAK deve ser alfanumérico"
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
    ruleText: "SICREDI: número lógico obrigatório inicia com a letra T e possui 8 caracteres no total. Ex: T1234567.",
    hint: "Obrigatório: inicia com T + 7 números. Ex: T1234567.",
    validate: (v) => /^T\d{7}$/i.test(v),
    error: "Para SICREDI, informe T + 7 números, totalizando 8 caracteres. Ex: T1234567."
  },
  "SIPAG / SICOOB": {
    label: "Número lógico",
    ruleText: "SIPAG / SICOOB: número lógico obrigatório inicia com a letra T e possui 8 caracteres no total. Ex: T1234567.",
    hint: "Obrigatório: inicia com T + 7 números. Ex: T1234567.",
    validate: (v) => /^T\d{7}$/i.test(v),
    error: "Para SIPAG / SICOOB, informe T + 7 números, totalizando 8 caracteres. Ex: T1234567."
  },
  PAGSEGURO: {
    label: "Número lógico",
    ruleText: "PAGSEGURO: número lógico obrigatório com 15 caracteres, podendo iniciar com T. Ex: T1234567891011.",
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
  "BANCO PAGSEGURO (PAGBANK)": ["Certificado e Private Key", "Client ID", "Client Secret", "Chave PIX"],
  "BANCO SANTANDER": ["Chave PIX", "Client ID", "Secret Key"],
  "BANCO SICOOB": ["Chave PIX", "Cliente ID"],
  "BANCO SICREDI": ["Chave PIX", "Client ID", "Client Secret", "Comprovante do portal da Sicredi"],
  BANRISUL: ["Client ID", "Client Secret", "Chave_Dict"]
};

const placeholdersCamposPix = {
  "BANCO BRADESCO::Chave Aleatória": "Chave aleatória criada seguindo o procedimento acima"
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
    description: "No PDF aparecerá uma orientação \"Clique aqui\" para preencher, quando visualizar essa opção clique no botão Abrir formulário do PagBank.",
    link: "https://app.pipefy.com/public/form/z7Uas1lI",
    linkLabel: "Abrir formulário do PagBank",
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
    message: "Encaminhe o certificado e a Private Key enviados pela PagSeguro.",
    hint: "Depois de abrir o WhatsApp, anexe os dois arquivos na conversa.",
    value: "Certificado e Private Key serão encaminhados como anexo no WhatsApp."
  },
  "BANCO SICREDI::Comprovante do portal da Sicredi": {
    message: "Ao gerar as credenciais conforme orientado no PDF acima, a Sicredi irá disponibilizar um comprovante em formato PDF.",
    hint: "Por gentileza, encaminhe esse comprovante juntamente com as credenciais geradas.",
    value: "Comprovante do portal da Sicredi será encaminhado em PDF junto com as credenciais fornecidas."
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
const numeroRedeHint = document.querySelector("#numeroRedeHint");
const adquirenteHint = document.querySelector("#adquirenteHint");
const adquirenteRuleText = document.querySelector("#adquirenteRuleText");
const pinpadMarca = document.querySelector("#pinpadMarca");
const pinpadModelo = document.querySelector("#pinpadModelo");
const quantidadeTerminais = document.querySelector("#quantidadeTerminais");
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
const sendInfoBtn = document.querySelector("#sendInfoBtn");
const sendHint = document.querySelector("#sendHint");
const notice = document.querySelector("#notice");
const trocaAdquirenteSection = document.querySelector("#trocaAdquirenteSection");
const tipoAlteracaoAdquirente = document.querySelector("#tipoAlteracaoAdquirente");
const trocaAdquirenteFields = document.querySelector("#trocaAdquirenteFields");
const inclusaoAdquirenteFields = document.querySelector("#inclusaoAdquirenteFields");
const adquirenteAtualTroca = document.querySelector("#adquirenteAtualTroca");
const novaAdquirenteTroca = document.querySelector("#novaAdquirenteTroca");
const numeroLogicoTroca = document.querySelector("#numeroLogicoTroca");
const numeroLogicoTrocaLabel = document.querySelector("#numeroLogicoTrocaLabel");
const numeroLogicoTrocaHint = document.querySelector("#numeroLogicoTrocaHint");
const numeroRedeTroca = document.querySelector("#numeroRedeTroca");
const numeroRedeTrocaHint = document.querySelector("#numeroRedeTrocaHint");
const trocaAdquirenteRuleCard = document.querySelector("#trocaAdquirenteRuleCard");
const trocaAdquirenteRuleText = document.querySelector("#trocaAdquirenteRuleText");
const adquirenteAtualInclusao = document.querySelector("#adquirenteAtualInclusao");
const segundaAdquirenteInclusao = document.querySelector("#segundaAdquirenteInclusao");
const numeroLogicoInclusao = document.querySelector("#numeroLogicoInclusao");
const numeroLogicoInclusaoLabel = document.querySelector("#numeroLogicoInclusaoLabel");
const numeroLogicoInclusaoHint = document.querySelector("#numeroLogicoInclusaoHint");
const numeroRedeInclusao = document.querySelector("#numeroRedeInclusao");
const numeroRedeInclusaoHint = document.querySelector("#numeroRedeInclusaoHint");
const bandeirasAdquirenteAtual = document.querySelector("#bandeirasAdquirenteAtual");
const bandeirasSegundaAdquirente = document.querySelector("#bandeirasSegundaAdquirente");

let pinpadModeloOutro = null;
let hasTriedSubmit = false;

const onlyDigits = (value) => value.replace(/\D/g, "");

function ensureOutroOption() {
  if (!pinpadMarca) return;

  const hasOutro = Array.from(pinpadMarca.options).some((option) => option.value === "Outro");

  if (!hasOutro) {
    const option = document.createElement("option");
    option.value = "Outro";
    option.textContent = "Outro";
    pinpadMarca.appendChild(option);
  }
}

function ensurePinpadOutroField() {
  if (!pinpadModelo) return;

  const modeloField = pinpadModelo.closest(".field");
  if (!modeloField) return;

  let existingInput = document.querySelector("#pinpadModeloOutro");

  if (!existingInput) {
    existingInput = document.createElement("input");
    existingInput.id = "pinpadModeloOutro";
    existingInput.name = "pinpadModeloOutro";
    existingInput.type = "text";
    existingInput.placeholder = "Digite o modelo do PINPAD";
    existingInput.className = "hidden";

    pinpadModelo.insertAdjacentElement("afterend", existingInput);
  }

  let existingWarning = document.querySelector("#pinpadOutroWarning");

  if (!existingWarning) {
    existingWarning = document.createElement("small");
    existingWarning.id = "pinpadOutroWarning";
    existingWarning.className = "hint warning-hint hidden";
    existingWarning.textContent = "Você selecionou um modelo não homologado. Pode ser que o TEF não suporte esse modelo.";

    existingInput.insertAdjacentElement("afterend", existingWarning);
  }

  pinpadModeloOutro = existingInput;

  if (!pinpadModeloOutro.dataset.listenerAdded) {
    pinpadModeloOutro.addEventListener("input", () => {
      validateFieldWhenAllowed(pinpadModeloOutro);
      updateProgress();
      updateSubmitState();
    });

    pinpadModeloOutro.dataset.listenerAdded = "true";
  }
}

function maskCnpj(value) {
  const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 14);

  if (/[A-Z]/.test(raw)) {
    return raw;
  }

  return raw
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

function needsAdquirenteChange() {
  return tipoSolicitacao.value === "troca_inclusao_adquirente";
}

function dataNeedsTef(data) {
  return data.tipoSolicitacao === "tef" || data.tipoSolicitacao === "tef_pix";
}

function dataNeedsPix(data) {
  return data.tipoSolicitacao === "pix" || data.tipoSolicitacao === "tef_pix";
}

function dataNeedsAdquirenteChange(data) {
  return data.tipoSolicitacao === "troca_inclusao_adquirente";
}

function setError(input, message) {
  if (!input) return;

  const field = input.closest(".field") || input.parentElement;
  const error = field?.querySelector(".error");

  if (field) field.classList.toggle("invalid", Boolean(message));
  if (error) error.textContent = message || "";
}

function clearField(input) {
  if (!input) return;

  input.value = "";
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
  const adquirenteChangeOnly = needsAdquirenteChange();
  const cnpjOnly = pixOnly || adquirenteChangeOnly;

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

    field.classList.toggle("hidden", cnpjOnly);
    input.required = !cnpjOnly && requiredWhenNotPixOnly.includes(id);

    if (cnpjOnly) {
      input.value = "";
      setError(input, "");
    }
  });

  const cnpj = document.getElementById("cnpj");

  if (cnpj) {
    cnpj.required = adquirenteChangeOnly;
    cnpj.closest(".field")?.classList.remove("hidden");
    setError(cnpj, "");
  }
}

function getNumeroRedeHint(adquirenteValue) {
  if (!adquirenteValue) return "Selecione a adquirente para saber qual código informar.";

  return adquirenteValue === "STONE"
    ? "Para Stone, o Número Rede é o Stone Code."
    : "Número Rede é o Código EC (Estabelecimento Comercial) gerado na adquirente.";
}

function setRequired(inputs, required) {
  inputs.forEach((input) => {
    if (!input) return;
    input.required = required;
  });
}

function clearHiddenFields(container) {
  if (!container) return;

  container.querySelectorAll("input, select, textarea").forEach((input) => {
    clearField(input);
  });
}

function resetTrocaAdquirenteRule() {
  numeroLogicoTrocaLabel.textContent = "Número lógico da nova adquirente *";
  numeroLogicoTrocaHint.textContent = "Selecione a nova adquirente para ver a regra obrigatória.";
  numeroRedeTrocaHint.textContent = getNumeroRedeHint("");
  trocaAdquirenteRuleText.textContent = "Selecione a nova adquirente para exibir a regra correta do número lógico ou Código SAK.";
  trocaAdquirenteRuleCard.classList.add("hidden");
  setError(numeroLogicoTroca, "");
  setError(numeroRedeTroca, "");
}

function updateTrocaAdquirenteRule() {
  const regra = regrasAdquirentes[novaAdquirenteTroca.value];

  if (!regra) {
    resetTrocaAdquirenteRule();
    return;
  }

  numeroLogicoTrocaLabel.textContent = `${regra.label} da nova adquirente *`;
  numeroLogicoTrocaHint.textContent = regra.hint;
  numeroRedeTrocaHint.textContent = getNumeroRedeHint(novaAdquirenteTroca.value);
  trocaAdquirenteRuleText.textContent = regra.ruleText;
  trocaAdquirenteRuleCard.classList.remove("hidden");

  validateFieldWhenAllowed(numeroLogicoTroca);
}

function resetInclusaoAdquirenteRule() {
  numeroLogicoInclusaoLabel.textContent = "Número lógico da adquirente que deseja acrescentar *";
  numeroLogicoInclusaoHint.textContent = "Selecione a adquirente secundária para ver a regra obrigatória.";
  numeroRedeInclusaoHint.textContent = getNumeroRedeHint("");
}

function updateInclusaoAdquirenteRule() {
  const regra = regrasAdquirentes[segundaAdquirenteInclusao.value];

  if (!regra) {
    resetInclusaoAdquirenteRule();
    validateFieldWhenAllowed(numeroLogicoInclusao);
    return;
  }

  numeroLogicoInclusaoLabel.textContent = `${regra.label} da adquirente que deseja acrescentar *`;
  numeroLogicoInclusaoHint.textContent = regra.hint;
  numeroRedeInclusaoHint.textContent = getNumeroRedeHint(segundaAdquirenteInclusao.value);

  validateFieldWhenAllowed(numeroLogicoInclusao);
}

function updateAdquirenteChangeVisibility() {
  const showChange = needsAdquirenteChange();
  const isTroca = showChange && tipoAlteracaoAdquirente.value === "troca";
  const isInclusao = showChange && tipoAlteracaoAdquirente.value === "inclusao";

  trocaAdquirenteSection.classList.toggle("hidden", !showChange);
  trocaAdquirenteFields.classList.toggle("hidden", !isTroca);
  inclusaoAdquirenteFields.classList.toggle("hidden", !isInclusao);
  tipoAlteracaoAdquirente.required = showChange;

  setRequired([adquirenteAtualTroca, novaAdquirenteTroca], isTroca);
  setRequired([numeroLogicoTroca, numeroRedeTroca], isTroca && Boolean(novaAdquirenteTroca.value));
  setRequired(
    [
      adquirenteAtualInclusao,
      segundaAdquirenteInclusao,
      numeroLogicoInclusao,
      numeroRedeInclusao,
      bandeirasAdquirenteAtual,
      bandeirasSegundaAdquirente
    ],
    isInclusao
  );

  if (!showChange) {
    clearField(tipoAlteracaoAdquirente);
    clearHiddenFields(trocaAdquirenteSection);
    resetTrocaAdquirenteRule();
    return;
  }

  if (!isTroca) {
    clearHiddenFields(trocaAdquirenteFields);
    resetTrocaAdquirenteRule();
  } else {
    updateTrocaAdquirenteRule();
  }

  if (!isInclusao) {
    clearHiddenFields(inclusaoAdquirenteFields);
    resetInclusaoAdquirenteRule();
  } else {
    updateInclusaoAdquirenteRule();
  }

  updateSectionNumbers();
  updateProgress();
  updateSubmitState();
}

function updateRequestVisibility() {
  const showTef = needsTef();
  const showPix = needsPix();
  const showAdquirenteChange = needsAdquirenteChange();

  tefSections.forEach((section) => section.classList.toggle("hidden", !showTef));
  pixFormSection.classList.toggle("hidden", !showPix);
  trocaAdquirenteSection.classList.toggle("hidden", !showAdquirenteChange);

  updateEstabelecimentoVisibility();
  updateSectionNumbers();

  [adquirente, numeroLogico, pinpadMarca, quantidadeTerminais].forEach((input) => {
    if (input) input.required = showTef;
  });

  bancoPix.required = showPix;

  if (!showTef) {
    [adquirente, numeroLogico, pinpadMarca, pinpadModelo, pinpadModeloOutro].forEach(clearField);

    if (quantidadeTerminais) {
      quantidadeTerminais.value = "1";
      quantidadeTerminais.required = false;
      setError(quantidadeTerminais, "");
    }

    pinpadModelo.innerHTML = '<option value="">Selecione primeiro a marca</option>';
    pinpadModelo.disabled = false;
    pinpadModelo.classList.remove("hidden");

    if (pinpadModeloOutro) {
      pinpadModeloOutro.classList.add("hidden");
      pinpadModeloOutro.disabled = true;
      pinpadModeloOutro.required = false;
    }

    const warning = document.querySelector("#pinpadOutroWarning");
    if (warning) warning.classList.add("hidden");

    modeloHint.textContent = "Modelos aceitos serão exibidos conforme a marca.";
    numeroLogicoLabel.textContent = "Número lógico *";
    numeroRedeHint.textContent = getNumeroRedeHint("");
    adquirenteHint.textContent = "Selecione a adquirente.";
    if (adquirenteRuleText) adquirenteRuleText.textContent = "Selecione a adquirente para exibir a regra correta do número lógico ou Código SAK.";
  } else {
    updateAdquirenteRule();
    updatePinpadModels();
  }

  updateAdquirenteChangeVisibility();

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
    numeroRedeHint.textContent = getNumeroRedeHint("");
    adquirenteHint.textContent = "Selecione a adquirente";
    if (adquirenteRuleText) adquirenteRuleText.textContent = "Selecione a adquirente para exibir a regra correta do número lógico ou Código SAK.";
    return;
  }

  numeroLogicoLabel.textContent = `${regra.label} *`;
  numeroRedeHint.textContent = getNumeroRedeHint(adquirente.value);
  adquirenteHint.textContent = regra.hint;
  if (adquirenteRuleText) adquirenteRuleText.textContent = regra.ruleText;

  validateFieldWhenAllowed(numeroLogico);
}

function updatePinpadModels() {
  ensurePinpadOutroField();

  pinpadModelo.innerHTML = "";

  const marca = pinpadMarca.value;
  const isOutro = marca === "Outro";
  const modelos = modelosPinpad[marca] || [];
  const warning = document.querySelector("#pinpadOutroWarning");

  if (isOutro) {
    pinpadModelo.classList.add("hidden");
    pinpadModelo.disabled = true;
    pinpadModelo.required = false;
    pinpadModelo.value = "";
    setError(pinpadModelo, "");

    if (pinpadModeloOutro) {
      pinpadModeloOutro.classList.remove("hidden");
      pinpadModeloOutro.disabled = false;
      pinpadModeloOutro.required = needsTef();
    }

    if (warning) warning.classList.remove("hidden");

    modeloHint.textContent = "Digite manualmente o modelo do PINPAD.";
  } else {
    pinpadModelo.classList.remove("hidden");
    pinpadModelo.disabled = false;
    pinpadModelo.required = needsTef() && Boolean(marca);

    if (pinpadModeloOutro) {
      pinpadModeloOutro.classList.add("hidden");
      pinpadModeloOutro.disabled = true;
      pinpadModeloOutro.required = false;
      pinpadModeloOutro.value = "";
      setError(pinpadModeloOutro, "");
    }

    if (warning) warning.classList.add("hidden");

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
  }

  if (!marca) {
    setError(pinpadModelo, "");
  } else if (isOutro && pinpadModeloOutro) {
    validateFieldWhenAllowed(pinpadModeloOutro);
  } else {
    validateFieldWhenAllowed(pinpadModelo);
  }

  updateProgress();
  updateSubmitState();
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
    const placeholderCampo = placeholdersCamposPix[`${banco}::${campo}`] || "";
    const attachmentInstruction = getPixAttachmentInstruction(banco, campo);
    const wrapper = document.createElement("div");

    if (attachmentInstruction) {
      wrapper.className = "field field--full";
      wrapper.innerHTML = `
        <div class="attention-card pix-attention-card" data-pix-label="${campo}" data-pix-value="${attachmentInstruction.value}">
          <strong>Atenção</strong>
          <p>${attachmentInstruction.message}</p>
          <small>${attachmentInstruction.hint}</small>
        </div>
      `;
    } else {
      wrapper.className = "field";
      wrapper.innerHTML = `
        <label for="pix_${key}">${campo} *</label>
        <input id="pix_${key}" name="pix_${key}" type="text" ${campo.toLowerCase() === "cnpj" ? 'placeholder="Informe o CNPJ" data-mask="cnpj"' : placeholderCampo ? `placeholder="${placeholderCampo}"` : ""} data-pix-label="${campo}" required />
        <small class="error"></small>
      `;
    }

    pixDynamicFields.appendChild(wrapper);
  });

  updateSubmitState();
}

function getFieldError(input) {
  if (!input || input.closest(".hidden")) return "";

  if (input.type === "checkbox") {
    return input.required && !input.checked ? "Confirme este item para enviar." : "";
  }

  const value = input.value.trim();

  if (input.required && !value) return "Campo obrigatório.";

  if (input.id === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Informe um e-mail válido.";
  }

  if (input.id === "cpf" && value && !isValidCpf(value)) {
    return "Informe um CPF válido.";
  }

  if (input.id === "numeroLogico") {
    if (!needsTef()) return "";

    const regra = regrasAdquirentes[adquirente.value];

    if (!regra) return "Selecione a adquirente antes de preencher.";

    if (!regra.validate(value)) return regra.error;
  }

  if (input.id === "numeroLogicoTroca") {
    if (!needsAdquirenteChange() || tipoAlteracaoAdquirente.value !== "troca") return "";

    const regra = regrasAdquirentes[novaAdquirenteTroca.value];

    if (!regra) return "Selecione a nova adquirente antes de preencher.";

    if (!regra.validate(value)) return regra.error;
  }

  if (input.id === "numeroLogicoInclusao") {
    if (!needsAdquirenteChange() || tipoAlteracaoAdquirente.value !== "inclusao") return "";

    const regra = regrasAdquirentes[segundaAdquirenteInclusao.value];

    if (!regra) return "Selecione a adquirente secundária antes de preencher.";

    if (!regra.validate(value)) return regra.error;
  }

  if (input.id === "pinpadModelo" && needsTef() && pinpadMarca.value !== "Outro") {
    if (!pinpadMarca.value) return "";

    if (!value) return "Selecione o modelo do PINPAD.";

    const modelos = modelosPinpad[pinpadMarca.value] || [];

    if (!modelos.includes(value)) return "Selecione um modelo";
  }

  if (input.id === "pinpadModeloOutro" && needsTef() && pinpadMarca.value === "Outro") {
    if (!value) return "Informe o modelo do PINPAD.";
  }

  if (input.id === "bancoPix" && needsPix() && !value) {
    return "Selecione o banco PIX.";
  }

  if (input.id === "quantidadeTerminais" && needsTef()) {
    const quantidade = Number(value);

    if (!Number.isInteger(quantidade) || quantidade < 1) {
      return "Informe uma quantidade válida, a partir de 1.";
    }
  }

  return "";
}

function validateField(input) {
  const message = getFieldError(input);
  setError(input, message);
  return !message;
}

function validateFieldWhenAllowed(input) {
  if (hasTriedSubmit) return validateField(input);

  setError(input, "");
  return true;
}

function getRequiredIds() {
  const requiredIds = ["tipoSolicitacao"];

  if (needsAdquirenteChange()) {
    requiredIds.push("cnpj");
  } else if (tipoSolicitacao.value !== "pix") {
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
    requiredIds.push("adquirente", "numeroLogico", "pinpadMarca", "quantidadeTerminais");

    if (pinpadMarca.value === "Outro") {
      requiredIds.push("pinpadModeloOutro");
    } else if (pinpadMarca.value) {
      requiredIds.push("pinpadModelo");
    }
  }

  if (needsAdquirenteChange()) {
    requiredIds.push("tipoAlteracaoAdquirente");

    if (tipoAlteracaoAdquirente.value === "troca") {
      requiredIds.push("adquirenteAtualTroca", "novaAdquirenteTroca");

      if (novaAdquirenteTroca.value) {
        requiredIds.push("numeroLogicoTroca", "numeroRedeTroca");
      }
    }

    if (tipoAlteracaoAdquirente.value === "inclusao") {
      requiredIds.push(
        "adquirenteAtualInclusao",
        "segundaAdquirenteInclusao",
        "numeroLogicoInclusao",
        "numeroRedeInclusao",
        "bandeirasAdquirenteAtual",
        "bandeirasSegundaAdquirente"
      );
    }
  }

  if (needsPix()) requiredIds.push("bancoPix");

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

  return valid;
}

function updateSubmitState() {
  sendInfoBtn.hidden = false;
  sendInfoBtn.disabled = false;

  if (sendHint) {
    sendHint.hidden = true;
    sendHint.textContent = "";
  }
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

  document.querySelectorAll("#pixDynamicFields [data-pix-label][data-pix-value]").forEach((item) => {
    pixCampos[item.dataset.pixLabel] = item.dataset.pixValue;
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

function buildSummary(data, mask = true) {
  const regra = regrasAdquirentes[data.adquirente];
  const lines = [];

  addLine(lines, "Tipo de solicitação", tiposSolicitacao[data.tipoSolicitacao]);

  lines.push("");
  lines.push("DADOS DO ESTABELECIMENTO");
  addLine(lines, "CNPJ", data.cnpj);

  if (data.tipoSolicitacao !== "pix" && !dataNeedsAdquirenteChange(data)) {
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
    lines.push("DADOS DA ADQUIRENTE");
    addLine(lines, "Adquirente afiliada", data.adquirente);
    addLine(lines, "Número rede/código cadastrado", data.numeroRede);
    addLine(lines, regra?.label || "Número lógico", data.numeroLogico);

    lines.push("");
    lines.push("DADOS DO PINPAD");
    addLine(lines, "Marca", data.pinpadMarca);

    if (data.pinpadMarca === "Outro") {
      addLine(lines, "Modelo", data.pinpadModeloOutro);
      addLine(lines, "Quantidade de terminais", data.quantidadeTerminais || "1");
      lines.push("Aviso: Estou ciente que o modelo do Pinpad não é um modelo homologado");
    } else {
      addLine(lines, "Modelo", data.pinpadModelo);
      addLine(lines, "Quantidade de terminais", data.quantidadeTerminais || "1");
    }
  }

  if (dataNeedsAdquirenteChange(data)) {
    lines.push("");
    lines.push("ALTERAÇÃO DE ADQUIRENTE");

    if (data.tipoAlteracaoAdquirente === "troca") {
      const regraTroca = regrasAdquirentes[data.novaAdquirenteTroca];

      addLine(lines, "Tipo de alteração", "Troca de adquirente");
      addLine(lines, "Adquirente utilizada atualmente", data.adquirenteAtualTroca);
      addLine(lines, "Nova adquirente", data.novaAdquirenteTroca);
      addLine(lines, regraTroca?.label || "Número lógico", data.numeroLogicoTroca);
      addLine(lines, "Número Rede", data.numeroRedeTroca);
    }

    if (data.tipoAlteracaoAdquirente === "inclusao") {
      const regraInclusao = regrasAdquirentes[data.segundaAdquirenteInclusao];

      addLine(lines, "Tipo de alteração", "Inclusão de adquirente");
      addLine(lines, "Adquirente Principal", data.adquirenteAtualInclusao);
      addLine(lines, "Bandeiras aceitas na adquirente atual", data.bandeirasAdquirenteAtual);
      addLine(lines, "Adquirente secundária", data.segundaAdquirenteInclusao);
      addLine(lines, regraInclusao?.label || "Número lógico", data.numeroLogicoInclusao);
      addLine(lines, "Número Rede", data.numeroRedeInclusao);
      addLine(lines, "Bandeiras utilizadas na adquirente secundária", data.bandeirasSegundaAdquirente);
    }
  }

  if (dataNeedsPix(data)) {
    lines.push("");
    lines.push("PIX NO TEF");
    addLine(lines, "Banco", data.bancoPix);

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

  if (!opened) {
    window.location.href = url;
  }
}

function focusFirstInvalidField() {
  const firstInvalidInput = form.querySelector(
    ".field.invalid input, .field.invalid select, .field.invalid textarea"
  );

  if (firstInvalidInput) {
    firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
    firstInvalidInput.focus();
  }
}

sendInfoBtn.addEventListener("click", () => {
  hasTriedSubmit = true;

  if (!validateForm()) {
    showNotice("Preencha todos os campos obrigatórios corretamente antes de enviar.", "error");
    focusFirstInvalidField();
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

  if (event.target.id === "cnpj" || event.target.dataset.mask === "cnpj") {
    event.target.value = maskCnpj(event.target.value);
  }

  validateFieldWhenAllowed(event.target);
  updateProgress();
  updateSubmitState();
});

form.addEventListener("change", (event) => {
  if (event.target.id === "tipoSolicitacao") updateRequestVisibility();
  if (event.target.id === "adquirente") updateAdquirenteRule();
  if (event.target.id === "tipoAlteracaoAdquirente") updateAdquirenteChangeVisibility();
  if (event.target.id === "novaAdquirenteTroca") updateTrocaAdquirenteRule();
  if (event.target.id === "segundaAdquirenteInclusao") updateInclusaoAdquirenteRule();
  if (event.target.id === "pinpadMarca") updatePinpadModels();
  if (event.target.id === "bancoPix") createPixFields();

  if (event.target.matches("input, select, textarea")) {
    validateFieldWhenAllowed(event.target);
  }

  updateProgress();
  updateSubmitState();
});

ensureOutroOption();
ensurePinpadOutroField();
updateAdquirenteRule();
updatePinpadModels();
updateRequestVisibility();
updateProgress();
updateSubmitState();
